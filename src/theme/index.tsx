import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./break-points.theme";
import { colors } from "./colors.theme";
import { ButtonTheme } from "./button.theme";
import { TextTheme } from "./text.theme";
import { TabsTheme } from "./tabs.theme";

export const baseTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fff",
        fontSize: "16px",
      },
    },
  },
  breakpoints,
  colors,
  components: {
    Button: ButtonTheme,
    Text: TextTheme,
    Tabs: TabsTheme
  },
});
