import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./break-points.theme";
import { ButtonTheme } from "./button.theme";
import { colors } from "./colors.theme";

export const baseTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fff",
        fontSize: "16px"
      }
    }
  },
  breakpoints,
  colors,
  components: {
    Button: ButtonTheme
  }
});
