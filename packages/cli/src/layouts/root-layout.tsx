import { Outlet } from "react-router";
import { ThemeRoot } from "./themed-root";
import { ThemeProvider } from "../providers/theme";
import { TostProvider } from "../providers/toast";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { DialogProvider } from "../providers/dialog";
import { PromptConfigProvider } from "../providers/prompt-config";
export function RootLayout() {
  return (
    <ThemeProvider>
      <TostProvider>
        <KeyboardLayerProvider>
          <DialogProvider>
            <PromptConfigProvider>
            <ThemeRoot>
              <Outlet />
            </ThemeRoot>
            </PromptConfigProvider>
          </DialogProvider>
        </KeyboardLayerProvider>
      </TostProvider>
    </ThemeProvider>
  );
};