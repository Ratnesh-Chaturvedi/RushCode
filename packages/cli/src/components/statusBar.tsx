import { Box, TextAttributes } from "@opentui/core";

export const StatusBar =()=>{


    
    return (
    <box flexDirection="row" 
    gap={1}>
        <text fg="cyan">
            Build
        </text>
    <text attributes={TextAttributes.DIM} fg="red">
        ›
    </text>
    <text>Claude Opus 5</text>
    </box>
    )
}