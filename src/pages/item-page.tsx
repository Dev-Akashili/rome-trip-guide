import { ArrowLeft } from "lucide-react"
import { Navigate, Link, useLocation, useParams } from "react-router-dom"
import { ImageWithFallback } from "../components/shared/image-with-fallback"
import { PreviousNextNavigation } from "../components/shared/previous-next-navigation"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { categories } from "../data/categories"
import {
  getDefaultCategoryForDestination,
  getDestinationBySlug,
  getPrevNextDestinations,
  isOptionalDestination,
} from "../lib/navigation"
import { usePreferences } from "../lib/preferences-context"
import type { DestinationType } from "../types"

const typeLabel: Record<DestinationType, string> = {
  att: "Attraction",
  opt: "Optional attraction",
  str: "Street / route",
  shop: "Shopping area",
}

export function ItemPage() {
  const { slug } = useParams()
  const location = useLocation()
  const { visitMode } = usePreferences()
  const destination = slug ? getDestinationBySlug(slug) : undefined

  if (!destination) {
    return <Navigate to="/not-found" replace />
  }

  const params = new URLSearchParams(location.search)
  const categoryFromQuery = params.get("cat")
  const categorySlug = categoryFromQuery ?? getDefaultCategoryForDestination(destination.id)
  const category = categories.find((entry) => entry.slug === categorySlug) ?? categories[0]
  const navContext = getPrevNextDestinations(destination.id, category.slug, visitMode)
  const isOptionalInPriority = visitMode === "priority" && isOptionalDestination(destination)

  return (
    <article className="space-y-6">
      <Button asChild variant="outline" size="sm" className="w-fit">
        <Link to={`/category/${category.slug}`}>
          <ArrowLeft className="size-4" />
          Back to {category.title}
        </Link>
      </Button>

      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {destination.types.map((type) => (
            <Badge key={type} variant={type === "opt" ? "warning" : "secondary"}>
              {typeLabel[type]}
            </Badge>
          ))}
        </div>
        <h1 className="editorial-heading text-3xl sm:text-4xl">{destination.name}</h1>
        <p className="max-w-3xl text-muted-foreground">{destination.shortDescription}</p>
        {isOptionalInPriority && (
          <p className="rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-900 dark:text-amber-200">
            This stop is optional and hidden from category lists in Priority mode. You can still read it here, or return to the category.
          </p>
        )}
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {destination.images.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-lg border bg-card">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              fallbackText={`${destination.name} image unavailable`}
              className="h-52 w-full object-cover"
            />
            <figcaption className="space-y-1 p-3 text-xs text-muted-foreground">
              {image.caption && <p>{image.caption}</p>}
              <a href={image.source.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                Source: {image.source.label}
              </a>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="space-y-3 rounded-xl border bg-card p-5">
        <h2 className="text-2xl font-semibold">A closer look</h2>
        <p className="max-w-3xl leading-7 text-muted-foreground">{destination.expandedGuide}</p>
      </section>

      {(destination.types.includes("att") || destination.types.includes("opt")) && destination.attraction && (
        <section className="space-y-4 rounded-xl border bg-card p-5">
          <h2 className="text-2xl font-semibold">Attraction guide</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">What it is</h3>
            <p className="text-muted-foreground">{destination.attraction.whatItIs}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">History</h3>
            <p className="text-muted-foreground">{destination.attraction.history}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What to notice</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {destination.attraction.whatToNotice.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Fun facts</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {destination.attraction.funFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {destination.types.includes("str") && destination.street && (
        <section className="space-y-4 rounded-xl border bg-card p-5">
          <h2 className="text-2xl font-semibold">Street and route guidance</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Where it leads</h3>
            <p className="text-muted-foreground">{destination.street.whereItLeads}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">How to explore it</h3>
            <p className="text-muted-foreground">{destination.street.howToExplore}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What to look for</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {destination.street.whatToLookFor.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Brief context</h3>
            <p className="text-muted-foreground">{destination.street.briefContext}</p>
          </div>
        </section>
      )}

      {destination.types.includes("shop") && destination.shop && (
        <section className="space-y-4 rounded-xl border bg-card p-5">
          <h2 className="text-2xl font-semibold">Shopping notes</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Shopping character</h3>
            <p className="text-muted-foreground">{destination.shop.shoppingCharacter}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What to shop for</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {destination.shop.whatToShopFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Where to shop</h3>
            <ul className="space-y-2 text-muted-foreground">
              {destination.shop.whereToShop.map((spot) => (
                <li key={spot.name}>
                  <span className="font-medium text-foreground">{spot.name}: </span>
                  {spot.whyVisit}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Practical advice</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {destination.shop.practicalAdvice.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <PreviousNextNavigation previous={navContext.previous} next={navContext.next} categorySlug={category.slug} />
    </article>
  )
}
