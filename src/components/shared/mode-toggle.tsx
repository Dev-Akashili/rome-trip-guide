import { MapPinned } from "lucide-react"
import { usePreferences } from "../../lib/preferences-context"
import { cn } from "../../lib/utils"
import { Switch } from "../ui/switch"

export function ModeToggle() {
  const { visitMode, setVisitMode } = usePreferences()
  const isPriority = visitMode === "priority"

  return (
    <label className="flex items-center gap-3 rounded-lg border border-border/80 bg-card/80 px-3 py-2 text-xs sm:text-sm">
      <MapPinned className="size-4 text-primary" aria-hidden="true" />
      <span className={cn("font-medium", !isPriority && "text-primary")}>Tourist</span>
      <Switch
        checked={isPriority}
        onCheckedChange={(checked) => setVisitMode(checked ? "priority" : "tourist")}
        aria-label="Toggle between tourist and priority mode"
      />
      <span className={cn("font-medium", isPriority && "text-primary")}>Priority</span>
    </label>
  )
}
