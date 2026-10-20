import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { PreferencesProvider } from "./lib/preferences-context"
import "./index.css"

const storedTheme = localStorage.getItem("rome-trip-theme")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
const shouldUseDark = storedTheme === "dark" || (storedTheme !== "light" && prefersDark)
document.documentElement.classList.toggle("dark", shouldUseDark)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </StrictMode>,
)
