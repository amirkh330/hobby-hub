import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  direction: "rtl",
  colors: {
    amir: {
      mainBg: "#2D2D2D",
      secondaryBg: "#414141",
      primary: "#AFE239",
      secondary: "#CDCDCD",
      secondaryVariant: "#AFAFAF",
      common: "#FFFFFF",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
});
