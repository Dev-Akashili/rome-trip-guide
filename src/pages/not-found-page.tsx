import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-xl border border-dashed p-8 text-center">
      <h1 className="editorial-heading text-3xl">Page not found</h1>
      <p className="text-muted-foreground">
        That route does not exist in this guide. You can jump back to the home page and continue from a category.
      </p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  )
}
