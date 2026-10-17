import { Box, TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";
import { usePromptConfig } from "../providers/prompt-config";
import { Mode } from "@rushcode/database/enums";
export const StatusBar =()=>{
    const {colors}=useTheme()
    const {model,mode}=usePromptConfig()
    return (
    <box flexDirection="row" 
    gap={1}>
        <text fg={mode===Mode.PLAN?colors.planMode:colors.primary}>
            {mode===Mode.PLAN?"Plan":"Build"}
        </text>
    <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
        ›
    </text>
    <text>{model}</text>
    </box>
    )
}