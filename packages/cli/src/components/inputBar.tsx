import { useRef, useCallback, useEffect } from "react"
import { h, type KeyBinding } from "@opentui/core";
import { StatusBar } from "./statusBar"
import { CommandMenu } from "./command-menu";
import type { Command } from "./command-menu/types";
import { useKeyboard, useRenderer } from "@opentui/react";
import type { TextareaRenderable, ScrollBoxRenderable } from "@opentui/core";
import { useCommandMenu } from "./command-menu/use-command-menu";


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
    const textareaRef = useRef<TextareaRenderable>(null)
    const onSubmitRef = useRef<() => void>(() => { });
    const renderer = useRenderer()
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
                exit: () => renderer.destroy()
            })

        } else {
            textarea.insertText(command.value + " ")
        }
    }, [renderer])


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


    return (
        <box width="100%" alignItems="center">
            <box
                border={["left"]}
                borderColor="cyan"
                width="100%"
            >
                <box position="relative" justifyContent="center" paddingX={2} paddingY={1} backgroundColor="#1A1A24" gap={1}>

                    {showCommandMenu && (
                        <box
                            position="absolute"
                            bottom="100%"
                            left={0}
                            width="100%"
                            backgroundColor="#1A1A24"
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
                    focused={!disabled} keyBindings={TEXTAREA_KEY_BINDINGS} placeholder={`Ask anyhting... "Fix the bug in index.tsx file`}
                    onContentChange={handleTextareaContentChange}
                    />
                    <StatusBar />
                </box>
            </box>
        </box>
    )
}