export type DestinationType = "att" | "opt" | "str" | "shop"

export type VisitMode = "tourist" | "priority"
export type Theme = "light" | "dark" | "system"

export interface SourceAttribution {
  label: string
  url: string
}

export interface DestinationImage {
  src: string
  alt: string
  caption?: string
  source: SourceAttribution
}

export interface AttractionContent {
  whatItIs: string
  history: string
  whatToNotice: string[]
  funFacts: string[]
}

export interface StreetContent {
  whereItLeads: string
  howToExplore: string
  whatToLookFor: string[]
  briefContext: string
}

export interface ShopSpot {
  name: string
  whyVisit: string
}

export interface ShopContent {
  shoppingCharacter: string
  whatToShopFor: string[]
  whereToShop: ShopSpot[]
  practicalAdvice: string[]
}

export interface Destination {
  id: string
  slug: string
  name: string
  shortDescription: string
  types: DestinationType[]
  images: DestinationImage[]
  attraction?: AttractionContent
  street?: StreetContent
  shop?: ShopContent
}

export interface Category {
  id: string
  slug: string
  title: string
  intro: string
  description: string
  image: DestinationImage
}

export interface CategoryMembership {
  categorySlug: string
  destinationIds: string[]
}
