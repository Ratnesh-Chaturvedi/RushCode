
import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new"
    },
    {
        name: "login",
        description: "Sign In with our browser",
        value: "/login",
    },
    {
        name: "logout",
        description: "Sign Out with our browser",
        value: "/logout",
    },
    {
        name: "upgrade",
        description: "Buy more credit",
        value: "/upgrade",

    },
    {
        name: "usage",
        description: "Open billing portal in our browser",
        value: "/usage",

    },
    {
        name: "themes",
        description: "Change color theme",
        value: "/themes",

    },
    {
        name: "session",
        description: "Browse past session",
        value: "/session",

    },
    {
        name: "models",
        description: "Select AI model for generation",
        value: "/models",

    },
    {
        name: "agents",
        description: "Switch Agents",
        value: "/agents",

    },
    {
        name: "exit",
        description: "Quit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        }
    },
]