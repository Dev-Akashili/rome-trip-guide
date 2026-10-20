import { memberships } from "../data/categories"
import { destinations } from "../data/destinations"
import type { Destination, VisitMode } from "../types"

const destinationMap = new Map(destinations.map((destination) => [destination.id, destination]))

export function isOptionalDestination(destination: Destination) {
  return destination.types.includes("opt")
}

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug)
}

export function getCategoryMembership(categorySlug: string) {
  return memberships.find((membership) => membership.categorySlug === categorySlug)
}

export function getCategoryDestinations(categorySlug: string, mode: VisitMode) {
  const membership = getCategoryMembership(categorySlug)
  if (!membership) {
    return []
  }

  return membership.destinationIds
    .map((id) => destinationMap.get(id))
    .filter((destination): destination is Destination => Boolean(destination))
    .filter((destination) => mode === "tourist" || !isOptionalDestination(destination))
}

export function getDefaultCategoryForDestination(destinationId: string) {
  const membership = memberships.find((entry) => entry.destinationIds.includes(destinationId))
  return membership?.categorySlug ?? "historic-centre"
}

export function getPrevNextDestinations(currentDestinationId: string, categorySlug: string, mode: VisitMode) {
  const categoryDestinations = getCategoryDestinations(categorySlug, mode)
  const index = categoryDestinations.findIndex((destination) => destination.id === currentDestinationId)

  if (index === -1) {
    return { previous: null, next: null, categoryDestinations }
  }

  return {
    previous: categoryDestinations[index - 1] ?? null,
    next: categoryDestinations[index + 1] ?? null,
    categoryDestinations,
  }
}
