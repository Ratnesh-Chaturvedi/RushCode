import { SUPPORTED_CHAT_MODELS } from "@rushcode/shared";
import {
  AgentsDialogContent,
  ModelsDialogContent,
  SessionDailogContent,
  ThemeDialogContent,
} from "../dialogs";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
    action: (ctx) => {
      ctx.navigate("/");
    },
  },
  {
    name: "login",
    description: "Sign In with our browser",
    value: "/login",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening browser to login..." });
    },
  },
  {
    name: "logout",
    description: "Sign Out with our browser",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.show({ variant: "success", message: "Signed out" });
    },
  },
  {
    name: "upgrade",
    description: "Buy more credit",
    value: "/upgrade",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening credits checkout..." });
    },
  },
  {
    name: "usage",
    description: "Open billing portal in our browser",
    value: "/usage",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening billing Portal..." });
    },
  },
  {
    name: "themes",
    description: "Change color theme",
    value: "/themes",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Theme",
        children: <ThemeDialogContent />,
      });
    },
  },
  {
    name: "sessions",
    description: "Browse past session",
    value: "/sessions",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Sessions",
        children: <SessionDailogContent />,
      });
    },
  },
  {
    name: "models",
    description: "Select AI model for generation",
    value: "/models",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Model",
        children: (
          <ModelsDialogContent
            models={SUPPORTED_CHAT_MODELS.map((m)=>m.id)}
            onSelectMode={ctx.setModel}
          />
        ),
      });
    },
  },
  {
    name: "agents",
    description: "Switch Agents",
    value: "/agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Agent",
        children: (
          <AgentsDialogContent
            currentMode={ctx.mode}
            onSelectMode={ctx.setMode}
          />
        ),
      });
    },
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
