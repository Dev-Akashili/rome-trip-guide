import { Link } from "react-router-dom"
import type { Destination } from "../../types"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import { ImageWithFallback } from "./image-with-fallback"

interface DestinationCardProps {
  destination: Destination
  categorySlug: string
}

const typeLabel: Record<string, string> = {
  att: "Attraction",
  opt: "Optional",
  str: "Street",
  shop: "Shopping",
}

export function DestinationCard({ destination, categorySlug }: DestinationCardProps) {
  const image = destination.images[0]

  return (
    <Link
      to={`/item/${destination.slug}?cat=${categorySlug}`}
      className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full overflow-hidden transition hover:border-primary/40 hover:shadow-md">
        <ImageWithFallback
          src={image?.src}
          alt={image?.alt ?? destination.name}
          fallbackText={`${destination.name} image unavailable`}
          className="h-44 w-full object-cover"
        />
        <CardContent className="space-y-3 text-left">
          <h3 className="text-lg font-semibold">{destination.name}</h3>
          <p className="text-sm text-muted-foreground">{destination.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {destination.types.map((type) => (
              <Badge key={type} variant={type === "opt" ? "warning" : "secondary"}>
                {typeLabel[type]}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
