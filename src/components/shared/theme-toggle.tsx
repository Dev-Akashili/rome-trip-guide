import { Monitor, Moon, Sun } from "lucide-react"
import { usePreferences } from "../../lib/preferences-context"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function ThemeToggle() {
  const { theme, setTheme } = usePreferences()

  const options = [
    { label: "Light", value: "light" as const, icon: Sun },
    { label: "Dark", value: "dark" as const, icon: Moon },
    { label: "System", value: "system" as const, icon: Monitor },
  ]

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border/80 bg-card/80 p-1" role="group" aria-label="Theme">
      {options.map(({ label, value, icon: Icon }) => (
        <Button
          key={value}
          size="sm"
          variant={theme === value ? "secondary" : "ghost"}
          onClick={() => setTheme(value)}
          aria-pressed={theme === value}
          aria-label={`Use ${label.toLowerCase()} theme`}
          className="h-8 px-2"
        >
          <Icon className="size-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
      <Badge variant="outline" className="hidden md:inline-flex">
        Theme
      </Badge>
    </div>
  )
}
