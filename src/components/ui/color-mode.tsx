"use client"
import * as React from "react"
import { ThemeProvider, useTheme } from "next-themes"
import { Button } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

export function ColorModeProvider(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </ThemeProvider>
  )
}

export function useColorMode() {
  const { theme, systemTheme, setTheme } = useTheme()
  const resolved = theme === "system" ? systemTheme : theme
  const toggleColorMode = React.useCallback(() => {
    setTheme(resolved === "dark" ? "light" : "dark")
  }, [resolved, setTheme])
  return { colorMode: resolved, setColorMode: setTheme, toggleColorMode }
}

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  const label = colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
  return (
    <Button aria-label={label} variant="outline" size="sm" onClick={toggleColorMode}>
      {colorMode === "dark" ? <FiSun /> : <FiMoon />}
    </Button>
  )
}
