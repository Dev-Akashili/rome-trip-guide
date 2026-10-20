import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Destination } from "../../types"
import { Button } from "../ui/button"

interface PreviousNextNavigationProps {
  previous: Destination | null
  next: Destination | null
  categorySlug: string
}

function NavItem({
  destination,
  direction,
  categorySlug,
}: {
  destination: Destination | null
  direction: "previous" | "next"
  categorySlug: string
}) {
  const icon = direction === "previous" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />
  const label = direction === "previous" ? "Previous" : "Next"

  if (!destination) {
    return (
      <Button variant="outline" className="w-full justify-start sm:w-auto" disabled>
        {direction === "previous" && icon}
        <span>{label}</span>
        {direction === "next" && icon}
      </Button>
    )
  }

  return (
    <Button asChild variant="outline" className="h-auto w-full flex-1 justify-start whitespace-normal text-left">
      <Link to={`/item/${destination.slug}?cat=${categorySlug}`}>
        {direction === "previous" && icon}
        <span>
          <span className="block text-xs text-muted-foreground">{label}</span>
          <span className="block">{destination.name}</span>
        </span>
        {direction === "next" && icon}
      </Link>
    </Button>
  )
}

export function PreviousNextNavigation({ previous, next, categorySlug }: PreviousNextNavigationProps) {
  return (
    <nav aria-label="Destination navigation" className="mt-8 flex flex-col gap-3 sm:flex-row">
      <NavItem destination={previous} direction="previous" categorySlug={categorySlug} />
      <NavItem destination={next} direction="next" categorySlug={categorySlug} />
    </nav>
  )
}
