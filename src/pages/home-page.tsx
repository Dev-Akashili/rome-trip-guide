import { categories } from "../data/categories"
import { usePreferences } from "../lib/preferences-context"
import { CategoryCard } from "../components/shared/category-card"
import { Badge } from "../components/ui/badge"

export function HomePage() {
  const { visitMode } = usePreferences()

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Badge variant="outline" className="w-fit">
          Mode: {visitMode === "tourist" ? "Tourist" : "Priority"}
        </Badge>
        <h1 className="editorial-heading text-3xl leading-tight sm:text-5xl">
          Personal walking guide for Rome
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A practical companion for moving between landmark stops, understanding what you are seeing, and spending less time buried in your phone.
        </p>
      </section>

      <section aria-labelledby="categories-title" className="space-y-4">
        <h2 id="categories-title" className="text-2xl font-semibold">
          Explore by category
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}
