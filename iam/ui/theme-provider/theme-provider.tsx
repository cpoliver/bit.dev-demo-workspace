import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import * as colors from "./DS_colors"

const theme = extendTheme({
  colors: {
    ...colors,
  },
})

export function ThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
