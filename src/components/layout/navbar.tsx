import { MapPin } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { categories } from "../../data/categories"
import { useNavbarVisibility } from "../../hooks/use-navbar-visibility"
import { cn } from "../../lib/utils"
import { ModeToggle } from "../shared/mode-toggle"
import { ThemeToggle } from "../shared/theme-toggle"

export function Navbar() {
  const isVisible = useNavbarVisibility()

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/90 backdrop-blur transition-transform duration-300 supports-[backdrop-filter]:bg-background/75",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide sm:text-base">
          <MapPin className="size-4 text-primary sm:size-5" />
          <span className="editorial-heading text-base sm:text-lg">AKASHILI'S ROME TRIP</span>
        </Link>

        <nav aria-label="Primary navigation" className="order-3 flex w-full gap-2 overflow-x-auto pb-1 sm:order-none sm:w-auto sm:pb-0">
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`/category/${category.slug}`}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-2 py-1 text-sm whitespace-nowrap transition-colors hover:bg-muted",
                  isActive ? "bg-muted text-foreground" : "text-muted-foreground",
                )
              }
            >
              {category.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
