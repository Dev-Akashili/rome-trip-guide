import { Navigate, useParams } from "react-router-dom"
import { DestinationCard } from "../components/shared/destination-card"
import { Badge } from "../components/ui/badge"
import { categories } from "../data/categories"
import { getCategoryDestinations } from "../lib/navigation"
import { usePreferences } from "../lib/preferences-context"

export function CategoryPage() {
  const { slug } = useParams()
  const { visitMode } = usePreferences()

  const category = categories.find((entry) => entry.slug === slug)
  if (!category) {
    return <Navigate to="/not-found" replace />
  }

  const categoryDestinations = getCategoryDestinations(category.slug, visitMode)

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <Badge variant="outline">{visitMode === "tourist" ? "Tourist mode" : "Priority mode"}</Badge>
        <h1 className="editorial-heading text-3xl sm:text-4xl">{category.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{category.description}</p>
      </header>

      {categoryDestinations.length === 0 ? (
        <p className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
          No destinations are available in the current mode.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} categorySlug={category.slug} />
          ))}
        </div>
      )}
    </div>
  )
}
