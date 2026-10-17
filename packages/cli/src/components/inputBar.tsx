import { useRef, useCallback, useEffect } from "react"
import { h, type KeyBinding } from "@opentui/core";
import { StatusBar } from "./statusBar"
import { CommandMenu } from "./command-menu";
import type { Command } from "./command-menu/types";
import { useKeyboard, useRenderer } from "@opentui/react";
import type { TextareaRenderable, ScrollBoxRenderable } from "@opentui/core";
import { useCommandMenu } from "./command-menu/use-command-menu";
import { useToast } from "../providers/toast";
import { useDialog } from "../providers/dialog";
import { useKeyboardLayer } from "../providers/keyboard-layer";
import { useTheme } from "../providers/theme";
import { useNavigate } from "react-router";
import { Mode } from "@rushcode/database/enums";
import { usePromptConfig } from "../providers/prompt-config";



type Props = {
    onSubmit: (text: string) => void,
    disabled?: boolean
}

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
    { name: "return", action: "submit" },
    { name: "enter", action: "submit" },
    { name: "return", shift: true, action: "newline" },
    { name: "enter", shift: true, action: "newline" },
];

export const InputBar = ({ onSubmit, disabled = false }: Props) => {
    const {mode,toggleMode,setMode,setModel}=usePromptConfig()
    const textareaRef = useRef<TextareaRenderable>(null)
    const onSubmitRef = useRef<() => void>(() => { });
    const renderer = useRenderer()
    const toast=useToast()
    const dialog=useDialog()
    const navigate=useNavigate()
    const {isTopLayer,setResponder} =useKeyboardLayer()
    const {colors}=useTheme()
    const {
        showCommandMenu,
        commandQuery,
        selectedIndex,
        scrollRef,
        handleContentChange,
        resolveCommand,
        setSelectedIndex,
    } = useCommandMenu();

    const handleCommand = useCallback((command: Command) => {
        const textarea = textareaRef.current
        if (!textarea || !command) return;
        textarea.setText("")
        if (command.action) {
            command.action({
                exit: () => renderer.destroy(),
                toast,
                dialog,
                navigate,
                mode,
                setMode,
                setModel,
            })

        } else {
            textarea.insertText(command.value + " ")
        }
    }, [renderer,toast,dialog,navigate,mode,setMode,setModel])


    const handleSubmit = useCallback(() => {
        if (disabled) return;

        const textarea = textareaRef.current;
        if (!textarea) return;

        const text = textarea.plainText.trim();
        if (text.length === 0) return;

        onSubmit(text);
        textarea.setText("");
    }, [disabled, onSubmit])


    const handleCommandExecute = useCallback((index: number) => {
        const command = resolveCommand(index);
        handleCommand(command)

    }, [])


    const handleTextareaContentChange = useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea) return

        handleContentChange(textarea.plainText)

    }, [])


    // Wire up textarea submit handler once so it always reads the latest state.
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.onSubmit = () => {
            onSubmitRef.current();
        };
    }, []);

    onSubmitRef.current = () => {
        if (disabled) return;

        if (showCommandMenu) {
            const command = resolveCommand(selectedIndex);
            handleCommand(command as Command);
            return;
        }


        handleSubmit();
    };

useKeyboard((key)=>{
if(disabled)return;
if(!isTopLayer("base"))return;
if(key.name==="tab"){
    key.preventDefault();
    toggleMode()
}
})



    //Register the base layer responder for ctrl+c dismassal
    useEffect(()=>{
        setResponder("base",()=>{
            if(disabled)return false;
            const textarea=textareaRef.current
            if(textarea && textarea.plainText.length>0){
                textarea.setText("")
                return true;
            }

            return false;
        })
        
        return ()=>setResponder("base",null) 
    },[disabled,setResponder])


    return (
        <box width="100%" alignItems="center">
            <box
                border={["left"]}
                borderColor={mode===Mode.PLAN?colors.planMode:colors.primary}
                width="100%"
            >
                <box position="relative" justifyContent="center" paddingX={2} paddingY={1} backgroundColor={colors.surface} gap={1}>

                    {showCommandMenu && (
                        <box
                            position="absolute"
                            bottom="100%"
                            left={0}
                            width="100%"
                            backgroundColor={colors.surface}
                            zIndex={10}
                        >
                            <CommandMenu
                                query={commandQuery}
                                selectedIndex={selectedIndex}
                                scrollRef={scrollRef}
                                onSelect={setSelectedIndex}
                                onExecute={handleCommandExecute}
                            />
                        </box>
                )}
                    <textarea
                    ref={textareaRef}
                    focused={!disabled && (isTopLayer("base") || isTopLayer("command"))} keyBindings={TEXTAREA_KEY_BINDINGS} placeholder={`Ask anyhting... "Fix the bug in index.tsx file"`}
                    onContentChange={handleTextareaContentChange}
                    />
                    <StatusBar />
                </box>
            </box>
        </box>
    )
}