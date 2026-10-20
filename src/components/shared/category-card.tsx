import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Category } from "../../types"
import { ImageWithFallback } from "./image-with-fallback"
import { Card, CardContent } from "../ui/card"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/category/${category.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
      <Card className="overflow-hidden transition hover:border-primary/40 hover:shadow-md">
        <ImageWithFallback
          src={category.image.src}
          alt={category.image.alt}
          fallbackText={`${category.title} image unavailable`}
          className="h-48 w-full object-cover"
        />
        <CardContent className="space-y-2 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <ArrowRight className="size-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">{category.intro}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
