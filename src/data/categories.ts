import type { Category, CategoryMembership } from "../types"

export const categories: Category[] = [
  {
    id: "historic-centre",
    slug: "historic-centre",
    title: "Historic Centre",
    intro: "Piazzas, churches, and elegant streets that capture central Rome in one walk.",
    description:
      "From Piazza del Popolo down to Trastevere, this route blends major landmarks with atmospheric streets and optional side stops.",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Piazza_Navona_%28Rome%29_at_night.jpg/330px-Piazza_Navona_%28Rome%29_at_night.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      alt: "Evening view across Piazza Navona in Rome.",
      caption: "Piazza Navona at dusk, one of the emblematic views of central Rome.",
      source: {
        label: "Wikimedia Commons via Wikipedia",
        url: "https://en.wikipedia.org/wiki/Piazza_Navona",
      },
    },
  },
  {
    id: "ancient-rome",
    slug: "ancient-rome",
    title: "Ancient Rome",
    intro: "Imperial monuments, archaeological layers, and the political heart of classical Rome.",
    description:
      "This category follows the area around the Colosseum and Roman Forum, then climbs toward Capitoline Hill and surrounding neighborhoods.",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/330px-Foro_Romano_Musei_Capitolini_Roma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      alt: "Wide view of ruins in the Roman Forum.",
      caption: "The Roman Forum remains the visual core of ancient Rome.",
      source: {
        label: "Wikimedia Commons via Wikipedia",
        url: "https://en.wikipedia.org/wiki/Roman_Forum",
      },
    },
  },
  {
    id: "vatican-city",
    slug: "vatican-city",
    title: "Vatican City",
    intro: "Monumental religious spaces plus nearby streets and bridges worth adding to the same walk.",
    description:
      "The Vatican core is paired with practical nearby streets and squares to keep navigation smooth on foot.",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/330px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      alt: "St Peter's Square with colonnades and obelisk.",
      caption: "St Peter's Square anchors the Vatican walking area.",
      source: {
        label: "Wikimedia Commons via Wikipedia",
        url: "https://en.wikipedia.org/wiki/St._Peter%27s_Square",
      },
    },
  },
]

export const memberships: CategoryMembership[] = [
  {
    categorySlug: "historic-centre",
    destinationIds: [
      "piazza-del-popolo",
      "santa-maria-dual-churches",
      "via-del-corso",
      "santa-maria-del-popolo-church",
      "leonardo-da-vinci-museum",
      "pincio-terrace",
      "piazza-di-spagna",
      "trevi-fountain",
      "pantheon",
      "trastevere-santa-maria-church",
    ],
  },
  {
    categorySlug: "ancient-rome",
    destinationIds: [
      "colosseum",
      "roman-forum",
      "palatine-hill",
      "arch-of-constantine",
      "monti",
      "piazza-venezia-il-vittoriano",
      "capitoline-hill-campidoglio",
      "teatro-marcello",
      "jewish-ghetto",
      "campo-de-fiori",
    ],
  },
  {
    categorySlug: "vatican-city",
    destinationIds: [
      "vatican-museums",
      "st-peters-square-and-basilica",
      "via-della-conciliazione",
      "castel-sant-angelo",
      "piazza-navona",
      "via-dei-coronari",
    ],
  },
]
