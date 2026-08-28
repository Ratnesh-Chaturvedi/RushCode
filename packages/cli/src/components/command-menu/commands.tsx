
import { ThemeDialogContent } from "../dialogs";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
        action:(ctx)=>{
            ctx.toast.show({message:"Starting new conversation..."
            })
        }
    },
    {
        name: "login",
        description: "Sign In with our browser",
        value: "/login",
         action:(ctx)=>{
            ctx.toast.show({message:"Opening browser to login..."
            })
        }

    },
    {
        name: "logout",
        description: "Sign Out with our browser",
        value: "/logout",
         action:(ctx)=>{
            ctx.toast.show({variant:"success",message:"Signed out"
            })
        }
    },
    {
        name: "upgrade",
        description: "Buy more credit",
        value: "/upgrade",
         action:(ctx)=>{
            ctx.toast.show({message:"Opening credits checkout..."
            })
        }

    },
    {
        name: "usage",
        description: "Open billing portal in our browser",
        value: "/usage",
         action:(ctx)=>{
            ctx.toast.show({message:"Opening billing Portal..."
            })
        }

    },
    {
        name: "themes",
        description: "Change color theme",
        value: "/themes",
         action:(ctx)=>{
           ctx.dialog.open({
            title:"Select Theme",
            children:<ThemeDialogContent/>
           })
        }

    },
    {
        name: "session",
        description: "Browse past session",
        value: "/session",
         action:(ctx)=>{
            ctx.toast.show({message:"Loading Sessions..."
            })
        }
    },
    {
        name: "models",
        description: "Select AI model for generation",
        value: "/models",
         action:(ctx)=>{
             ctx.dialog.open({
                title:"Select Model",
                children:<text>Agent Selection Coming Soon..</text>
            })
        }

    },
    {
        name: "agents",
        description: "Switch Agents",
        value: "/agents",
         action:(ctx)=>{
            ctx.dialog.open({
                title:"Select Mode",
                children:<text>Model Selection Coming Soon..</text>
            })
        }

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