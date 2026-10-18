// import { tool } from "ai";
// import { z } from "zod";

// const MAX_OUTPUT = 20_000;
// const DEFAULT_TIMEOUT = 30_000;

// export function createBashTool(cwd: string) {
//   return tool({
//     description:
//       "Execute a shell command in the project directory. Use this for running tests, builds, git operations, package installs, and any other shell commands.",
//     inputSchema: z.object({
//       command: z.string().describe("The shell command to execute"),
//       timeout: z
//         .number()
//         .describe("Timeout in milliseconds (default: 30000)")
//         .default(DEFAULT_TIMEOUT),
//     }),
//     execute: async ({ command, timeout }) => {
//       try {
//         const proc = Bun.spawn(["bash", "-c", command], {
//           cwd,
//           stdout: "pipe",
//           stderr: "pipe",
//           env: { ...process.env, TERM: "dumb" },
//         });

//         const timer = setTimeout(() => {
//           proc.kill();
//         }, timeout);

//         const [stdout, stderr] = await Promise.all([
//           new Response(proc.stdout).text(),
//           new Response(proc.stderr).text(),
//         ]);

//         const exitCode = await proc.exited;
//         clearTimeout(timer);

//         const truncate = (s: string) =>
//           s.length > MAX_OUTPUT
//             ? s.slice(0, MAX_OUTPUT) +
//               `\n... (truncated, ${s.length} total chars)`
//             : s;

//         return {
//           stdout: truncate(stdout),
//           stderr: truncate(stderr),
//           exitCode,
//         };
//       } catch (err) {
//         const message = err instanceof Error ? err.message : String(err);
//         return { error: `Failed to execute command: ${message}` };
//       }
//     },
//   });
// }

// for windows

import { tool } from "ai";
import { z } from "zod";

const MAX_OUTPUT = 20_000;
const MAX_BUFFER_BYTES = 2 * 1024 * 1024;
const DEFAULT_TIMEOUT = 30_000;
const MAX_TIMEOUT = 120_000;

function truncate(value: string): string {
  if (value.length <= MAX_OUTPUT) {
    return value;
  }

  return (
    value.slice(0, MAX_OUTPUT) +
    `\n... (truncated, ${value.length} total chars)`
  );
}

export function createBashTool(cwd: string) {
  return tool({
    description:
      "Execute a PowerShell command in the project directory on Windows. " +
      "Use this for tests, builds, git operations, package installs, " +
      "and file operations. Use PowerShell syntax, not Bash syntax.",

    inputSchema: z.object({
      command: z
        .string()
        .trim()
        .min(1)
        .max(10_000)
        .describe("The PowerShell command to execute"),

      timeout: z
        .number()
        .int()
        .min(1_000)
        .max(MAX_TIMEOUT)
        .default(DEFAULT_TIMEOUT)
        .describe("Timeout in milliseconds (default: 30000)"),
    }),

    execute: async ({ command, timeout }) => {
      let timer: ReturnType<typeof setTimeout> | undefined;
      let timedOut = false;
      let proc: ReturnType<typeof Bun.spawn> | undefined;

      try {
        // Encode the script to avoid Windows command-line quoting issues.
        const script = [
          "$ErrorActionPreference = 'Stop'",
          "try {",
          command,
          "if ($LASTEXITCODE -is [int]) { exit $LASTEXITCODE }",
          "exit 0",
          "} catch {",
          "[Console]::Error.WriteLine($_.ToString())",
          "exit 1",
          "}",
        ].join("\n");

        const encodedCommand = Buffer.from(script, "utf16le").toString(
          "base64",
        );

        proc = Bun.spawn(
          [
            "powershell.exe",
            "-NoLogo",
            "-NoProfile",
            "-NonInteractive",
            "-EncodedCommand",
            encodedCommand,
          ],
          {
            cwd,
            stdin: "ignore",
            stdout: "pipe",
            stderr: "pipe",
            windowsHide: true,
            env: {
              ...process.env,
              TERM: "dumb",
            },
            maxBuffer: MAX_BUFFER_BYTES,
            killSignal: "SIGKILL",
          },
        );

        timer = setTimeout(() => {
          timedOut = true;
          proc?.kill();
        }, timeout);

        function readStream(
          stream: number | ReadableStream<Uint8Array> | undefined,
        ): Promise<string> {
          if (!(stream instanceof ReadableStream)) {
            return Promise.resolve("");
          }

          return new Response(stream).text();
        }
        const [stdout, stderr, exitCode] = await Promise.all([
          readStream(proc.stdout),
          readStream(proc.stderr),
          proc.exited,
        ]);

        return {
          stdout: truncate(stdout),
          stderr: truncate(stderr),
          exitCode,
          timedOut,
        };
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);

        return {
          stdout: "",
          stderr: `Failed to execute command: ${message}`,
          exitCode: 1,
          timedOut,
        };
      } finally {
        if (timer) {
          clearTimeout(timer);
        }
      }
    },
  });
}
