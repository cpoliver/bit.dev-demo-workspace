import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import emotion from "@emotion/react";
import * as colors from "./DS_colors";

const theme = extendTheme({
  colors: {
    ...colors,
  },
});

// console.debug(emotion);

export function ThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
