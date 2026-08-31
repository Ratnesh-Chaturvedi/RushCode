import { Outlet } from "react-router";
import { ThemeRoot } from "./themed-root";
import { ThemeProvider } from "../providers/theme";
import { TostProvider } from "../providers/toast";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { DialogProvider } from "../providers/dialog";
export function RootLayout() {
  return (
    <ThemeProvider>
      <TostProvider>
        <KeyboardLayerProvider>
          <DialogProvider>
            <ThemeRoot>
              <Outlet />
            </ThemeRoot>
          </DialogProvider>
        </KeyboardLayerProvider>
      </TostProvider>
    </ThemeProvider>
  );
};