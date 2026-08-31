import { Box, TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

export const StatusBar =()=>{
    const {colors}=useTheme()
    
    return (
    <box flexDirection="row" 
    gap={1}>
        <text fg={colors.primary}>
            Build
        </text>
    <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
        ›
    </text>
    <text>Nunnu-Model-2</text>
    </box>
    )
}