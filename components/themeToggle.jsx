"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "./ui/button"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <SunIcon className="h-45 w-45 text-slate-800 dark:text-yellow-800 dark:rounded-full dark:bg-slate-300" />
      ) : (
        <MoonIcon className="h-45 w-45 text-slate-800 dark:text-white" />
      )}
    </Button>
  )
}

