import * as React from "react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "@/components/ui/color-mode"
import { system } from "@/theme/system"

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system ?? defaultSystem}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
