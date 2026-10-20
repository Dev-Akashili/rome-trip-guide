import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react"
import type { Theme, VisitMode } from "../types"

const THEME_KEY = "rome-trip-theme"
const MODE_KEY = "rome-trip-mode"

interface PreferencesContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
  visitMode: VisitMode
  setVisitMode: (mode: VisitMode) => void
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === "light" || saved === "dark" || saved === "system") {
    return saved
  }
  return "system"
}

function getInitialMode(): VisitMode {
  const saved = localStorage.getItem(MODE_KEY)
  return saved === "priority" ? "priority" : "tourist"
}

export function PreferencesProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [visitMode, setVisitMode] = useState<VisitMode>(() => getInitialMode())
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const syncTheme = () => {
      const nextTheme = theme === "system" ? (media.matches ? "dark" : "light") : theme
      setResolvedTheme(nextTheme)
      document.documentElement.classList.toggle("dark", nextTheme === "dark")
    }

    syncTheme()
    media.addEventListener("change", syncTheme)
    return () => media.removeEventListener("change", syncTheme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(MODE_KEY, visitMode)
  }, [visitMode])

  const value = useMemo(
    () => ({ theme, setTheme, resolvedTheme, visitMode, setVisitMode }),
    [theme, resolvedTheme, visitMode],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider")
  }
  return context
}
