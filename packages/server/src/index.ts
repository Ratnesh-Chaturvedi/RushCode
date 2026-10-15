import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { sentry } from "@sentry/hono/bun";
import sessions from "./routes/session"
import * as Sentry from "@sentry/hono/bun";
import chat from "./routes/chat"


const app = new Hono();

// sentry for error monitoring middleware
app.use(
  sentry(app, {
    dsn: "https://4db8e668c420a079d50abe854cd044d5@o4511688272642048.ingest.us.sentry.io/4512253206265856",
    tracesSampleRate: 1.0,
  }),
);


// routes to monitor errors using sentry
app.get("/debug-sentry", () => {
  // Send a log before throwing the error
  Sentry.logger.info('User triggered test error', {
    action: 'test_error_endpoint',
  });
  // Send a test metric before throwing the error
  Sentry.metrics.count('test_counter', 1);
  throw new Error("My first Sentry error!");
});

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    Sentry.logger.warn("Handled HTTP Error",{
      status:error.status,
      message:error.message || "Request Failed",
      path:c.req.path,
      method:c.req.method
    })

    return c.json({ 
      error: error.message || "Request failed",
    }, error.status);
  };

  Sentry.logger.error("Unhandled server error",{
    path:c.req.path,
    method:c.req.method,
    message:error instanceof Error ? error.message :"Unknown Error"
  })
  return c.json({ error: "Internal server error" }, 500);
});

const routes=app.route("/sessions",sessions).route("/chat",chat)


export type AppType= typeof routes

// idleTimeout must be high, otherwise LLM tool calls might not complete
export default {port:3000,fetch:app.fetch,idleTimeout:255}