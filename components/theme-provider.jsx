"use client"

import { ThemeProvider } from "next-themes"


export function ProviderTheme({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}