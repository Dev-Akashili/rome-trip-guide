import type { Destination } from "../types"

export const destinations: Destination[] = [
  {
    id: "piazza-del-popolo",
    slug: "piazza-del-popolo",
    name: "Piazza del Popolo",
    shortDescription: "A monumental northern gateway square framed by an obelisk, churches, and city views.",
    expandedGuide:
      "Imagine arriving here before the age of railways: for many visitors coming down the Via Flaminia, this was Rome's first grand urban room. The square is a useful place to pause and read the city's geometry. The obelisk marks its centre, the twin churches frame the southern exits, and the Pincio rises above the eastern edge. From here, choose whether to follow the straight line of Via del Corso or climb for a wider view before continuing.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Piazza_del_Popolo%2C_Roma_%28Rome%29.jpg/330px-Piazza_del_Popolo%2C_Roma_%28Rome%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Central view of Piazza del Popolo with the obelisk.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Piazza_del_Popolo" },
      },
    ],
    attraction: {
      whatItIs: "Piazza del Popolo is one of Rome's grand ceremonial squares and a practical starting point for walking into the historic centre.",
      history:
        "The square was redesigned in the late 18th and early 19th centuries by Giuseppe Valadier, but its symbolic role is older: this was the traditional point where visitors entered Rome from the north.",
      whatToNotice: [
        "The Egyptian obelisk in the centre, brought to Rome in antiquity.",
        "The twin churches at the south end, which frame the start of Via del Corso.",
        "The symmetry of the steps and terraces leading up toward Pincio.",
      ],
      funFacts: [
        "The name means 'People's Square', though historical explanations of the name vary.",
        "The obelisk originally stood in Circus Maximus before being moved here.",
      ],
    },
  },
  {
    id: "santa-maria-dual-churches",
    slug: "santa-maria-dual-churches",
    name: "Santa Maria Dual Churches",
    shortDescription: "The two Baroque churches that frame Rome's famous trident of streets.",
    expandedGuide:
      "The pair consists of Santa Maria in Montesanto and Santa Maria dei Miracoli. Their near-symmetry is a deliberate urban effect: viewed from the northern end of the piazza, their domes and facades help organise the three streets that fan out toward the centre. Look closely and the illusion gives way to two different plans, adapted to the uneven space available. They are a small but legible lesson in how Baroque architects used architecture to shape the experience of a whole square.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Santa_Maria_in_Montesanto_-_esterno.jpg/330px-Santa_Maria_in_Montesanto_-_esterno.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Santa Maria in Montesanto facade in Piazza del Popolo.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Santa_Maria_in_Montesanto%2C_Rome" },
      },
    ],
    attraction: {
      whatItIs:
        "Santa Maria dei Miracoli and Santa Maria in Montesanto are often called the 'twin churches' of Piazza del Popolo.",
      history:
        "Built in the 17th century, the pair helped shape one of Rome's most theatrical urban compositions at the meeting point of three major streets.",
      whatToNotice: [
        "Their facades look similar, but the buildings are not identical in plan.",
        "The positioning creates a visual gateway into Via del Corso and the surrounding routes.",
        "The domes are easy to spot when looking back from further down the streets.",
      ],
      funFacts: [
        "They were designed to create visual harmony from the square rather than strict architectural twins.",
        "The churches are a classic example of Baroque city planning as stage design.",
      ],
    },
  },
  {
    id: "via-del-corso",
    slug: "via-del-corso",
    name: "Via del Corso",
    shortDescription: "A long, central walking artery connecting Piazza del Popolo toward central monuments.",
    expandedGuide:
      "Via del Corso is most useful as a clear north-south reference line, not as a route that needs to be walked end to end. Piazza del Popolo marks its northern end and Piazza Venezia its southern end; major sights sit in the dense side streets between them. Pick a specific detour, note which side of the avenue you are on, and return to the Corso when you need to re-orient. The street's broad, busy character contrasts with the quieter lanes only a short turn away.",
    types: ["str", "shop"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Via_del_Corso_%2852501354470%29.jpg/330px-Via_del_Corso_%2852501354470%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Pedestrian perspective along Via del Corso.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Via_del_Corso" },
      },
    ],
    street: {
      whereItLeads:
        "Via del Corso runs south from Piazza del Popolo and gives direct or nearby access toward Piazza Venezia, the Spanish Steps area, and side streets to Trevi and the Pantheon.",
      howToExplore:
        "Use it as a spine route. Walk in one direction, then detour to specific landmarks on side streets and rejoin the avenue when needed.",
      whatToLookFor: [
        "Palazzo fronts with varied periods and proportions.",
        "Small church facades and side lanes opening to quieter courtyards.",
        "How major intersections help you orient quickly without maps.",
      ],
      briefContext:
        "The road follows an older alignment used for public processions and remains one of central Rome's strongest orientation lines.",
    },
    shop: {
      shoppingCharacter:
        "Via del Corso mixes accessible chains with department stores and side-street boutiques, making it practical for quick browsing.",
      whatToShopFor: ["Clothing and accessories", "Beauty products and pharmacy essentials", "Italian leather goods on nearby side streets"],
      whereToShop: [
        { name: "Galleria Alberto Sordi", whyVisit: "Historic shopping arcade with a central, weather-protected setting." },
        { name: "Rinascente (via del Tritone, short detour)", whyVisit: "Large department store with broad brand range and rooftop views." },
        { name: "Side streets toward Via Frattina", whyVisit: "Good transition from mainstream shops to more curated boutiques." },
      ],
      practicalAdvice: [
        "This street gets very crowded late afternoon; mornings are easier for relaxed browsing.",
        "Compare souvenir prices before buying near major intersections.",
      ],
    },
  },
  {
    id: "santa-maria-del-popolo-church",
    slug: "santa-maria-del-popolo-church",
    name: "Santa Maria del Popolo Church",
    shortDescription: "A richly layered church known for Renaissance chapels and major artworks.",
    expandedGuide:
      "This church is particularly rewarding when you look beyond the main nave and take time with its side chapels. The Cerasi Chapel brings Caravaggio and Annibale Carracci into close conversation, while the Chigi Chapel carries the legacy of Raphael's design and later Baroque work. The experience is concentrated rather than sprawling: identify a chapel, let your eyes adjust to the interior, and notice how family patronage turned a neighborhood church into a gallery of civic ambition. Access and visibility of individual works can vary during services or conservation.",
    types: ["opt"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/20140803_Basilica_of_Santa_Maria_del_Popolo_Rome_0191.jpg/330px-20140803_Basilica_of_Santa_Maria_del_Popolo_Rome_0191.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Exterior of Santa Maria del Popolo church.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Santa_Maria_del_Popolo" },
      },
    ],
    attraction: {
      whatItIs:
        "This church near Piazza del Popolo is a compact stop with exceptionally important art and architecture.",
      history:
        "Its current form evolved through late medieval and Renaissance patronage, with later additions by major architects and artists connected to papal Rome.",
      whatToNotice: [
        "Caravaggio paintings in the Cerasi Chapel (when visible).",
        "The Chigi Chapel associated with Raphael and later Bernini interventions.",
        "How many artistic periods coexist inside one relatively small church.",
      ],
      funFacts: [
        "The church's patronage linked it to influential Roman families and papal politics.",
        "It is often considered one of the best 'high-value' short stops for art lovers.",
      ],
    },
  },
  {
    id: "leonardo-da-vinci-museum",
    slug: "leonardo-da-vinci-museum",
    name: "Leonardo da Vinci Museum",
    shortDescription: "An optional technical-museum stop focused on reconstructions of Leonardo's ideas.",
    expandedGuide:
      "Approach this as an interpretive exhibition about Leonardo's methods rather than a collection of original machines. His notebooks move between observation, drawing, and practical questions about force, movement, water, and flight. A useful way to explore is to compare a model with the drawing or explanation beside it, asking which parts come directly from a surviving design and which are modern decisions made to make it work. Museum displays and access arrangements can change, so check the venue's current information before making a special trip.",
    types: ["opt"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Francesco_Melzi_-_Portrait_of_Leonardo_%28colour_correction%29.png/330px-Francesco_Melzi_-_Portrait_of_Leonardo_%28colour_correction%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Portrait traditionally associated with Leonardo da Vinci.",
        caption: "Used as a thematic image because open-license photos of the specific Rome museum displays are inconsistent across sources.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci" },
      },
    ],
    attraction: {
      whatItIs:
        "This optional museum-style stop presents models and demonstrations inspired by Leonardo da Vinci's engineering sketches.",
      history:
        "Leonardo's notebooks explored mechanics, flight, hydraulics, and anatomy. Modern exhibitions in Rome and elsewhere reinterpret those drawings with physical reconstructions.",
      whatToNotice: [
        "Working models that translate drawings into three-dimensional mechanisms.",
        "The gap between Renaissance concepts and modern engineering language.",
        "How display notes distinguish original sketches from later interpretive reconstructions.",
      ],
      funFacts: [
        "Leonardo wrote in mirrored script in many of his notes.",
        "Many 'Leonardo machines' seen today are modern reconstructions, not original surviving devices.",
      ],
    },
  },
  {
    id: "pincio-terrace",
    slug: "pincio-terrace",
    name: "Pincio Terrace",
    shortDescription: "A scenic terrace above Piazza del Popolo with broad city views.",
    expandedGuide:
      "The terrace works best as a pause between the open scale of Piazza del Popolo and the gardens above. From the balustrade, look across the oval square, then pick out the line of Via del Corso and the clustered domes beyond it. The Pincio is a public promenade rather than one isolated viewing platform, so you can continue through the gardens after the view instead of retracing every step. Late afternoon often gives softer light, but the panorama is rewarding whenever the air is clear.",
    types: ["opt"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Terrazza_del_Pincio_%2846397854832%29.jpg/330px-Terrazza_del_Pincio_%2846397854832%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Panoramic terrace at the Pincio overlooking Piazza del Popolo.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Pincian_Hill" },
      },
    ],
    attraction: {
      whatItIs: "The Pincio Terrace is an optional but rewarding lookout above the northern edge of central Rome.",
      history:
        "The terrace was integrated into the 19th-century redesign of the area by Valadier, linking the square below to elevated promenades.",
      whatToNotice: [
        "The axial view over Piazza del Popolo and Rome's domes.",
        "Shifting light around sunset, especially over church cupolas.",
        "The staircase and ramps that reconnect to street-level routes.",
      ],
      funFacts: [
        "The Pincio became a fashionable promenade for social strolling in modern Rome.",
        "Street performers often gather near the terrace in warmer months.",
      ],
    },
  },
  {
    id: "piazza-di-spagna",
    slug: "piazza-di-spagna",
    name: "Piazza di Spagna",
    shortDescription: "A landmark square anchored by the Spanish Steps and elegant surrounding streets.",
    expandedGuide:
      "Give the Spanish Steps a moment from below before climbing: the wide, irregular flights were designed as a monumental connection between the square and the church of Trinità dei Monti, not as a uniform staircase. At the base, the Barcaccia sits low in the square and offers a very different scale from the steps above. Once at the top, turn around for the view over the rooftops, then use the adjacent streets as a quieter way into the shopping district. Follow local signs and rules for protecting the steps and fountain.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Piazza_di_Spagna.jpg/330px-Piazza_di_Spagna.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "View of Piazza di Spagna and the Spanish Steps.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Piazza_di_Spagna" },
      },
    ],
    attraction: {
      whatItIs: "This square is a central gathering point and one of Rome's best-known urban compositions.",
      history:
        "The area developed around diplomatic and religious institutions, and the 18th-century Spanish Steps connected the square to Trinità dei Monti above.",
      whatToNotice: [
        "The broad stairway geometry and terrace rhythm.",
        "The Barcaccia fountain at the base, linked to Pietro and Gian Lorenzo Bernini.",
        "How adjacent streets transition quickly from ceremonial to intimate scale.",
      ],
      funFacts: [
        "The steps host seasonal floral displays.",
        "Despite the name, the square's identity combines Roman, Spanish, and French historical connections.",
      ],
    },
  },
  {
    id: "trevi-fountain",
    slug: "trevi-fountain",
    name: "Trevi Fountain",
    shortDescription: "Rome's most famous Baroque fountain, built as a theatrical water facade.",
    expandedGuide:
      "The fountain makes more sense when you read it as the end of a water route as well as a sculpture. The Acqua Vergine aqueduct supplies the display, while the Palazzo Poli becomes its architectural backdrop. Oceanus stands above the water, and the rocky foreground turns the small piazza into an imagined seascape. Because the space is compact and very popular, step back to take in the whole composition, keep pathways clear, and check current visitor rules before approaching the basin.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/330px-Trevi_Fountain_-_Roma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Trevi Fountain facade and basin.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Trevi_Fountain" },
      },
    ],
    attraction: {
      whatItIs: "Trevi Fountain is a monumental Baroque composition where sculpture, architecture, and water are fused.",
      history:
        "Completed in the 18th century, it marks the terminus of an ancient aqueduct route and became one of the most recognisable landmarks of Rome.",
      whatToNotice: [
        "Oceanus at the center with flanking figures representing abundance and health.",
        "The contrast between dramatic sculpture and compact urban setting.",
        "Sound and movement of water shaping the atmosphere.",
      ],
      funFacts: [
        "Coin-throwing tradition is linked to hopes of returning to Rome.",
        "Collected coins are regularly directed toward charitable initiatives.",
      ],
    },
  },
  {
    id: "pantheon",
    slug: "pantheon",
    name: "Pantheon",
    shortDescription: "A remarkably preserved Roman temple-turned-church with a massive concrete dome.",
    expandedGuide:
      "Stand just inside the entrance and let your eye travel from the portico into the circular interior; the transition is one of the building's great effects. The dome's diameter and the room's height are equal, making the interior fit within an imagined sphere. The oculus is open to the sky, so sunlight, clouds, and rain all become part of the visit. The building is still a consecrated church, and current entry arrangements may include ticketing or rules that differ from earlier visits.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/330px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Exterior view of the Pantheon in Rome.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Pantheon%2C_Rome" },
      },
    ],
    attraction: {
      whatItIs: "The Pantheon is one of antiquity's engineering masterpieces and one of Rome's most complete ancient monuments.",
      history:
        "Rebuilt under Emperor Hadrian in the 2nd century CE, it was later converted into a church, which helped preserve it through the medieval and early modern periods.",
      whatToNotice: [
        "The oculus at the center of the dome, the only direct light source.",
        "The coffered ceiling reducing weight while shaping visual rhythm.",
        "The enormous portico columns imported from Egypt.",
      ],
      funFacts: [
        "The dome remains the world's largest unreinforced concrete dome.",
        "Rain enters through the oculus and drains through a subtly sloped floor.",
      ],
    },
  },
  {
    id: "trastevere-santa-maria-church",
    slug: "trastevere-santa-maria-church",
    name: "Trastevere (Santa Maria Church)",
    shortDescription: "A lively neighborhood stop centered on one of Rome's oldest Marian churches.",
    expandedGuide:
      "Begin with the piazza, where the church is part of everyday neighborhood life rather than a monument set apart from it. Inside, look toward the apse mosaics and then compare their gold ground with the more intimate details of the chapels and columns. Outside, the square is a useful orientation point before exploring Trastevere's narrow lanes. The district is especially lively later in the day; visiting at a quieter hour makes it easier to appreciate the church before the surrounding social scene takes over.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/01_Santa_Maria_in_Trastevere_Facade.jpg/330px-01_Santa_Maria_in_Trastevere_Facade.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Facade of Santa Maria in Trastevere.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Santa_Maria_in_Trastevere" },
      },
    ],
    attraction: {
      whatItIs:
        "Santa Maria in Trastevere anchors a sociable piazza and offers early Christian roots with later artistic layers.",
      history:
        "The church traces its origins to late antiquity, with significant medieval rebuilding and celebrated mosaics that shaped its current identity.",
      whatToNotice: [
        "Golden mosaics in and around the apse.",
        "How the piazza and church facade interact as a social space.",
        "The contrast between quiet interior and animated exterior streets.",
      ],
      funFacts: [
        "It is traditionally counted among Rome's oldest churches dedicated to Mary.",
        "Trastevere's evening atmosphere makes this stop feel different by day and night.",
      ],
    },
  },
  {
    id: "colosseum",
    slug: "colosseum",
    name: "Colosseum",
    shortDescription: "The great Flavian amphitheatre and an enduring symbol of imperial Rome.",
    expandedGuide:
      "The Colosseum was a piece of urban infrastructure as much as a monument: its repeated entrances, numbered access points, and tiered seating moved a huge audience into and out of the arena. Imagine the building full of spectators and the arena floor hiding the service spaces below. Today, the exposed masonry also tells a story of later quarrying, earthquakes, repairs, and conservation. If you have a ticket, check exactly which areas it covers and arrive according to the current entry instructions; access to the underground and upper levels is not universal.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/330px-Colosseo_2020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "The Colosseum exterior in daylight.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Colosseum" },
      },
    ],
    attraction: {
      whatItIs:
        "The Colosseum is the largest Roman amphitheatre, designed for mass spectacles in the heart of imperial Rome.",
      history:
        "Built in the 1st century CE under the Flavian emperors, it hosted games and staged events, then evolved through reuse, damage, and restoration over centuries.",
      whatToNotice: [
        "The layered arcades and surviving travertine structure.",
        "Subterranean arena systems (when included in route access).",
        "How the monument aligns with nearby ancient routes and forums.",
      ],
      funFacts: [
        "Its original name was the Flavian Amphitheatre.",
        "The 'Colosseum' name is linked to a colossal statue once nearby.",
      ],
    },
  },
  {
    id: "roman-forum",
    slug: "roman-forum",
    name: "Roman Forum",
    shortDescription: "Ruins of temples, political buildings, and civic spaces at Rome's ancient core.",
    expandedGuide:
      "Try not to read the Forum as a single ruin from one moment in time. It grew over centuries, and the remains belong to different periods, functions, and levels of rebuilding. As you walk, imagine daily movement between temples, public meeting places, law courts, and commemorative monuments; the surviving columns are fragments of a dense civic centre. From a higher viewpoint, the alignments become easier to understand. Surfaces can be uneven and exposed to sun, so plan for comfortable footwear, water, and time to pause.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/330px-Foro_Romano_Musei_Capitolini_Roma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Panoramic ruins in the Roman Forum.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Roman_Forum" },
      },
    ],
    attraction: {
      whatItIs:
        "The Roman Forum was the civic and political center of ancient Rome, now an archaeological landscape of layered eras.",
      history:
        "From monarchy to republic to empire, this valley concentrated religious rites, legal activity, speeches, and processions, with each era adding or rebuilding monuments.",
      whatToNotice: [
        "Temple remains and triumphal arches marking former ceremonial routes.",
        "Differences in masonry and repairs across centuries.",
        "Elevated viewpoints that reveal street alignments and urban planning.",
      ],
      funFacts: [
        "Many iconic Roman speeches happened in this area.",
        "What looks like scattered ruins once formed dense, active public architecture.",
      ],
    },
  },
  {
    id: "palatine-hill",
    slug: "palatine-hill",
    name: "Palatine Hill",
    shortDescription: "Mythic and imperial hilltop with archaeological remains and broad views.",
    expandedGuide:
      "The Palatine offers two ways of seeing Rome at once: the hill is tied to foundation traditions, and its later palaces show how emperors made the landscape a setting for power. The scale of the residential complexes is easier to grasp from their terraces and long walls than from any single room. Look down toward the Forum on one side and the Circus Maximus on the other to understand why the position mattered. This is a large archaeological area with slopes and changing surfaces, so allow time and avoid treating it as a quick add-on to the Forum.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Palatine_Hill_from_across_the_Circus_Maximus_April_2019.jpg/330px-Palatine_Hill_from_across_the_Circus_Maximus_April_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Ruins and greenery on Palatine Hill.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Palatine_Hill" },
      },
    ],
    attraction: {
      whatItIs: "Palatine Hill combines early Roman legend with the remains of elite and imperial residences.",
      history:
        "Ancient tradition linked the hill to Rome's founding stories. Later, emperors built palaces here, turning it into a prestigious power district overlooking the Forum and Circus Maximus.",
      whatToNotice: [
        "Terraces and palace remains indicating vast imperial complexes.",
        "View corridors over the Forum and Circus Maximus.",
        "Garden areas that soften the archaeological terrain.",
      ],
      funFacts: [
        "The word 'palace' ultimately derives from 'Palatine'.",
        "The hill's archaeology spans from early huts to imperial luxury architecture.",
      ],
    },
  },
  {
    id: "arch-of-constantine",
    slug: "arch-of-constantine",
    name: "Arch of Constantine",
    shortDescription: "A triumphal arch beside the Colosseum, built with reused imperial reliefs.",
    expandedGuide:
      "This arch is a compact way to explore how Roman monuments reused and reinterpreted earlier art. Some reliefs were made for Constantine's monument, while other sculpted panels were taken from structures associated with earlier emperors and fitted into a new composition. Compare the different carving styles instead of assuming the arch was decorated all at once. Its position beside the Colosseum also places it along a ceremonial landscape linking the amphitheatre, the Forum, and routes through the ancient city.",
    types: ["opt"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Arch_of_Constantine_%28Rome%29_-_South_side%2C_from_Via_triumphalis.jpg/330px-Arch_of_Constantine_%28Rome%29_-_South_side%2C_from_Via_triumphalis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "The Arch of Constantine near the Colosseum.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Arch_of_Constantine" },
      },
    ],
    attraction: {
      whatItIs: "This optional stop is one of Rome's best-preserved triumphal arches and easy to pair with the Colosseum area.",
      history:
        "Erected in the early 4th century CE to honor Constantine's victory, the monument famously incorporates decorative elements repurposed from earlier imperial monuments.",
      whatToNotice: [
        "Mixed relief styles from different periods.",
        "The arch's strategic placement on ceremonial approach routes.",
        "Inscriptions linking monument and imperial legitimacy.",
      ],
      funFacts: [
        "Its reused sculpture made it a key case study for historians of late-antique art.",
        "It is among the largest surviving Roman triumphal arches.",
      ],
    },
  },
  {
    id: "monti",
    slug: "monti",
    name: "Monti",
    shortDescription: "A walkable district with craft boutiques, design shops, and relaxed side streets.",
    expandedGuide:
      "Monti is best explored in short, unhurried loops. Its small streets and sloping lanes feel more residential than the major shopping avenues, and shop styles can change from one block to the next. Browse with an open mind rather than expecting one continuous high street: independent fashion, vintage, design, and everyday neighborhood businesses sit alongside cafés and local services. Check opening information for any particular shop before making it a destination, and remember that the area's steep cobbles reward comfortable shoes.",
    types: ["shop"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Rome_via_dei_fori_imperiali_20050922.jpg/330px-Rome_via_dei_fori_imperiali_20050922.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Street scene in Monti area.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Monti_(rione_of_Rome)" },
      },
    ],
    shop: {
      shoppingCharacter:
        "Monti feels more independent and neighborhood-driven than Rome's major shopping boulevards.",
      whatToShopFor: ["Small-batch fashion and accessories", "Vintage finds", "Locally designed home goods and stationery"],
      whereToShop: [
        { name: "Via del Boschetto", whyVisit: "Known for boutiques and design-oriented independent stores." },
        { name: "Via Urbana", whyVisit: "Good for slower browsing and mixed artisanal offerings." },
        { name: "Piazza della Madonna dei Monti surroundings", whyVisit: "Easy place to pause between short shopping loops." },
      ],
      practicalAdvice: [
        "Many small shops close for breaks; use flexible timing rather than strict schedules.",
        "If something is handcrafted, ask about materials and origin before buying.",
      ],
    },
  },
  {
    id: "piazza-venezia-il-vittoriano",
    slug: "piazza-venezia-il-vittoriano",
    name: "Piazza Venezia (Il Vittoriano)",
    shortDescription: "A major traffic and orientation hub dominated by the Vittoriano monument.",
    expandedGuide:
      "Piazza Venezia is visually dominated by the Vittoriano, the white marble national monument also known as the Altare della Patria. The square itself is a busy junction, so it is more useful as an orientation point than as a place to cross casually. Use the monument as your landmark, identify a marked pedestrian crossing, and decide whether you are heading toward the Forum, Capitoline Hill, or Via del Corso. From a safe viewpoint, notice how modern traffic routes cut through an exceptionally dense historical setting.",
    types: ["str"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Roma.Piazza_Venezia.jpg/330px-Roma.Piazza_Venezia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Piazza Venezia with Vittoriano monument.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Piazza_Venezia" },
      },
    ],
    street: {
      whereItLeads:
        "From here you can orient toward Via del Corso, the Roman Forum area, Capitoline Hill, and routes toward Campo de' Fiori.",
      howToExplore:
        "Treat this as a decision point. Pause, identify your next direction by landmark, then commit to one branch before checking maps again.",
      whatToLookFor: [
        "The scale contrast between traffic flow and monumental architecture.",
        "Sightlines to nearby domes and ridge lines of Capitoline Hill.",
        "Pedestrian crossings that define practical movement paths.",
      ],
      briefContext:
        "Piazza Venezia became a modern symbolic center with the construction of the Vittoriano in the late 19th and early 20th centuries.",
    },
  },
  {
    id: "capitoline-hill-campidoglio",
    slug: "capitoline-hill-campidoglio",
    name: "Capitoline Hill (Campidoglio)",
    shortDescription: "A historic hilltop square redesign by Michelangelo above the Roman Forum.",
    expandedGuide:
      "The Campidoglio rewards a slow approach up the Cordonata, Michelangelo's broad, gently rising stair-ramp. At the top, the trapezoidal piazza and its buildings create a carefully composed space that feels quieter than the traffic below. The equestrian statue at the centre is a Roman copy; the original is preserved indoors. Walk around the square and look for the back-of-city views toward the Forum, where the contrast between Renaissance design and ancient remains becomes especially clear.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Maquette_de_Rome_%28mus%C3%A9e_de_la_civilisation_romaine%2C_Rome%29_%285911810278%29.jpg/330px-Maquette_de_Rome_%28mus%C3%A9e_de_la_civilisation_romaine%2C_Rome%29_%285911810278%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Capitoline Hill area in Rome model context.",
        caption: "This open-license image gives an overview context of the Capitoline zone.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Capitoline_Hill" },
      },
    ],
    attraction: {
      whatItIs:
        "Capitoline Hill is one of Rome's seven hills and a major political-religious site, now framed by the Campidoglio square.",
      history:
        "In antiquity, this hill held key temples and civic symbolism. In the Renaissance, Michelangelo redesigned the piazza, shaping one of Europe's most influential urban spaces.",
      whatToNotice: [
        "The geometric paving and controlled symmetry of the square.",
        "Views down toward the Roman Forum from nearby terraces.",
        "How medieval, ancient, and Renaissance layers coexist within short walking distance.",
      ],
      funFacts: [
        "Michelangelo's Campidoglio design was completed in phases after his lifetime.",
        "The hill long represented civic authority in both ancient and papal Rome.",
      ],
    },
  },
  {
    id: "teatro-marcello",
    slug: "teatro-marcello",
    name: "Teatro Marcello",
    shortDescription: "An optional ancient theatre whose arcades influenced later amphitheatre architecture.",
    expandedGuide:
      "The Theatre of Marcellus is easiest to appreciate from outside, where the lower arcades reveal the scale and rhythm of a Roman entertainment building. The upper levels have been adapted over time, so the structure visibly combines ancient masonry with later domestic and defensive uses. It is not the same building as the Colosseum, but comparing their arcades helps explain a shared architectural language. Treat the visit as an exterior urban stop unless current access information confirms that interior areas are open.",
    types: ["opt"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Teatro_di_Marcello_intero.jpg/330px-Teatro_di_Marcello_intero.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Theatre of Marcellus facade.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Theatre_of_Marcellus" },
      },
    ],
    attraction: {
      whatItIs:
        "Teatro Marcello is a compact optional stop where you can clearly read ancient theatre architecture reused in later centuries.",
      history:
        "Initiated under Julius Caesar and completed under Augustus, the theatre was dedicated to Marcellus. Later, parts were integrated into fortified and residential structures.",
      whatToNotice: [
        "Stacked arcades that anticipate the language of the Colosseum.",
        "Evidence of later construction above ancient levels.",
        "Its relationship to nearby river-facing routes and the Jewish Ghetto area.",
      ],
      funFacts: [
        "Renaissance and later families reused the structure rather than demolishing it.",
        "Its hybrid survival makes it a vivid example of Rome's continuous adaptation.",
      ],
    },
  },
  {
    id: "jewish-ghetto",
    slug: "jewish-ghetto",
    name: "Jewish Ghetto",
    shortDescription: "A historic district with layered memory, local food culture, and walkable lanes.",
    expandedGuide:
      "The Roman Jewish quarter is a living neighborhood, not an open-air museum. Its history includes a papal decree establishing a walled ghetto in 1555, centuries of compulsory confinement and restrictions, and the destruction of the walls after the end of papal rule. Walk respectfully: the Great Synagogue, Portico d'Ottavia, memorial plaques, and community institutions speak to different chapters of that history. The streets are also home to residents and active businesses, so observe quietly and avoid treating solemn memorials as props.",
    types: ["str"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Roma_Roman_Ghetto_%2852349970798%29.jpg/1280px-Roma_Roman_Ghetto_%2852349970798%29.jpg",
        alt: "Modern color photograph of a street in Rome's Jewish quarter.",
        caption: "A contemporary street view of the Roman Jewish quarter.",
        source: {
          label: "Jorge Franganillo, Wikimedia Commons (CC BY 2.0)",
          url: "https://commons.wikimedia.org/wiki/File:Roma_Roman_Ghetto_(52349970798).jpg",
        },
      },
    ],
    street: {
      whereItLeads:
        "The area connects well to Teatro Marcello, the Tiber-side walks, and onward routes toward Campo de' Fiori.",
      howToExplore:
        "Walk slowly through the smaller lanes, then orient at larger edges before crossing toward your next major square.",
      whatToLookFor: [
        "Street plaques and buildings tied to community memory.",
        "Shifts from quiet interior lanes to busier perimeter roads.",
        "Food-focused storefronts reflecting local Jewish-Roman traditions.",
      ],
      briefContext:
        "The district reflects a long and complex history of Roman Jewish life, including periods of severe restriction and later transformation.",
    },
  },
  {
    id: "campo-de-fiori",
    slug: "campo-de-fiori",
    name: "Campo de' Fiori",
    shortDescription: "A central square that combines market life, route orientation, and casual shopping.",
    expandedGuide:
      "Campo de' Fiori changes character across the day. The daytime market gives the square a practical, working rhythm, while later hours bring people back for food and socialising. Giordano Bruno's statue is a strong landmark, but the square's value is also in its connections: narrow lanes lead toward Piazza Navona, the Jewish quarter, and the river. Market stalls are independent businesses, so compare prices and ask what a product is before buying rather than assuming every display is locally made.",
    types: ["str", "shop"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Campo_dei_Fiori.jpg/330px-Campo_dei_Fiori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Campo de' Fiori market square in Rome.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Campo_de%27_Fiori" },
      },
    ],
    street: {
      whereItLeads:
        "Campo de' Fiori links naturally to Piazza Navona, the Jewish Ghetto edge, and bridges toward Trastevere.",
      howToExplore:
        "Use the square as a reset point. From here, choose one outgoing lane at a time and return if needed.",
      whatToLookFor: [
        "Morning market rhythm versus evening social atmosphere.",
        "Narrow connecting lanes radiating into dense medieval street fabric.",
        "The statue of Giordano Bruno as a visual center.",
      ],
      briefContext:
        "Historically a public square and marketplace, Campo de' Fiori remains one of the clearest examples of Rome's mixed civic-commercial spaces.",
    },
    shop: {
      shoppingCharacter:
        "Shopping here is less about luxury and more about market produce, specialty ingredients, and practical souvenirs.",
      whatToShopFor: ["Dried pasta and spices", "Regional sauces and condiments", "Small kitchen-oriented gifts and edible souvenirs"],
      whereToShop: [
        { name: "Open-air market stalls (daytime)", whyVisit: "Best for produce, spices, and quick visual immersion." },
        { name: "Castroni (nearby specialty food shops)", whyVisit: "Reliable choice for packaged Italian foods and coffee-related items." },
        { name: "Delis and bakeries on adjacent lanes", whyVisit: "Good for picnic supplies and local snack discovery." },
      ],
      practicalAdvice: [
        "Market quality varies by stall; compare before purchasing.",
        "Pack food gifts carefully if you plan long walking days afterward.",
      ],
    },
  },
  {
    id: "vatican-museums",
    slug: "vatican-museums",
    name: "Vatican Museums",
    shortDescription: "A vast museum complex with classical collections and Renaissance masterpieces.",
    expandedGuide:
      "The museums are a sequence of collections and architectural spaces rather than one gallery that can be absorbed in a single visit. Decide what matters most to you before entering: classical sculpture, the Raphael Rooms, the map galleries, and the Sistine Chapel each invite a different pace. Notice how rooms themselves—ceilings, wall decoration, and long perspectives—are part of the collection. The route can be crowded and tiring; consult the official visitor guidance for current ticketing, entry, access, and photography rules, and leave room for breaks.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Sistine_Chapel_ceiling_02_%28brightened%29.jpg/330px-Sistine_Chapel_ceiling_02_%28brightened%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Sistine Chapel ceiling detail.",
        caption: "Representative artwork from the Vatican Museums circuit.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling" },
      },
    ],
    attraction: {
      whatItIs:
        "The Vatican Museums are an extensive network of galleries containing ancient sculpture, papal collections, and major Renaissance works.",
      history:
        "The museums developed over centuries as papal collections expanded, eventually becoming one of the world's most significant museum complexes.",
      whatToNotice: [
        "How rooms shift from classical sculpture to richly decorated map and fresco galleries.",
        "The pace and crowd flow in major corridors.",
        "The transition into the Sistine Chapel context.",
      ],
      funFacts: [
        "The museums stretch across multiple connected buildings, not one single hall.",
        "Even focused routes usually require prioritizing only a fraction of the collection.",
      ],
    },
  },
  {
    id: "st-peters-square-and-basilica",
    slug: "st-peters-square-and-basilica",
    name: "St Peter's Square and Basilica",
    shortDescription: "The monumental heart of Vatican ceremonial space and one of Christianity's key churches.",
    expandedGuide:
      "The square and basilica are best understood as one sequence: approach through the open piazza, take in the colonnade's embrace, and then move inside to experience the change in scale. In the basilica, look for how sculpture, mosaics, architecture, and light work together rather than trying to take in every detail at once. St Peter's is an active place of worship, so dress and behave respectfully. Security checks, liturgical events, and access rules can affect entry; check official information before you go.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/330px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "St Peter's Basilica and square in Vatican City.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/St._Peter%27s_Basilica" },
      },
    ],
    attraction: {
      whatItIs: "This combined stop unites Bernini's embracing square with the scale and artistic depth of St Peter's Basilica.",
      history:
        "The current basilica was built during the Renaissance and Baroque periods over the traditional burial site of Saint Peter, while Bernini shaped the square to stage grand papal ceremonies.",
      whatToNotice: [
        "The elliptical colonnades framing the square.",
        "Interior scale, especially the nave and dome volume.",
        "Major works such as Michelangelo's Pietà (subject to viewing flow).",
      ],
      funFacts: [
        "Bernini described the square's colonnades as arms welcoming visitors.",
        "Multiple major architects contributed to the basilica over more than a century.",
      ],
    },
  },
  {
    id: "via-della-conciliazione",
    slug: "via-della-conciliazione",
    name: "Via della Conciliazione",
    shortDescription: "The broad approach boulevard linking the Tiber side to St Peter's Square.",
    expandedGuide:
      "The boulevard's most memorable feature is its long sightline: from the river side, St Peter's dome and facade gradually fill the view as you approach the square. That perspective is relatively recent. The avenue was cut through the Borgo in the 20th century, replacing a dense network of older streets to create a formal approach to the Vatican. Walk on the pavements, watch crossings, and use the side streets when you want a quieter route or a closer look at the neighborhood's surviving fabric.",
    types: ["str"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Roma-_Via_della_Conciliazione_-_52365342202.jpg/330px-Roma-_Via_della_Conciliazione_-_52365342202.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "View down Via della Conciliazione toward St Peter's Basilica.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Via_della_Conciliazione" },
      },
    ],
    street: {
      whereItLeads:
        "It provides a direct visual and pedestrian line between Castel Sant'Angelo side routes and St Peter's Square.",
      howToExplore:
        "Walk it intentionally at least once in each direction: toward the basilica for the reveal, then away for skyline context.",
      whatToLookFor: [
        "The framing effect on St Peter's dome and facade.",
        "Monumental lighting and perspective in the evening.",
        "Intersecting lanes that branch toward quieter neighborhood streets.",
      ],
      briefContext:
        "The avenue was created in the 20th century as a major urban intervention, replacing older dense fabric to produce a formal Vatican approach.",
    },
  },
  {
    id: "castel-sant-angelo",
    slug: "castel-sant-angelo",
    name: "Castel Sant'Angelo",
    shortDescription: "A riverfront fortress-museum that began as a Roman imperial mausoleum.",
    expandedGuide:
      "The building's circular mass preserves the outline of Hadrian's mausoleum, but its later appearance reflects a long shift from tomb to fortress, papal refuge, prison, and museum. The ramp through the interior helps explain the original monumental core; upper rooms and terraces reveal later layers and views across the Tiber. Outside, cross Ponte Sant'Angelo slowly and notice the angel sculptures as a sequence leading toward the castle. Museum routes and opening arrangements change, so check official visitor details before planning an interior visit.",
    types: ["att"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Castel_Sant%27Angelo_at_Night.jpg/330px-Castel_Sant%27Angelo_at_Night.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Castel Sant'Angelo illuminated at night.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Castel_Sant%27Angelo" },
      },
    ],
    attraction: {
      whatItIs:
        "Castel Sant'Angelo is a multi-era landmark: imperial tomb, papal fortress, and now museum with panoramic views.",
      history:
        "Built as Hadrian's mausoleum in the 2nd century CE, it was later fortified and linked to Vatican defenses, becoming a strategic refuge in turbulent periods.",
      whatToNotice: [
        "Massive cylindrical core of the original Roman structure.",
        "Later military additions and bastions.",
        "The bridge approach and angel statues creating a dramatic arrival.",
      ],
      funFacts: [
        "A fortified elevated corridor once connected it with Vatican precincts.",
        "Its layered functions make it one of Rome's clearest examples of adaptive reuse across centuries.",
      ],
    },
  },
  {
    id: "piazza-navona",
    slug: "piazza-navona",
    name: "Piazza Navona",
    shortDescription: "A Baroque showpiece square built over the footprint of an ancient stadium.",
    expandedGuide:
      "Piazza Navona's long oval outline follows the footprint of the Stadium of Domitian, which once hosted athletic contests. The ancient structure is mostly hidden in the surrounding buildings, but the shape of the square preserves its scale. In the centre, Bernini's Fountain of the Four Rivers turns the piazza into a Baroque conversation between water, sculpture, and the church facade opposite. Walk the perimeter as well as the centre: the changing angles reveal how the square holds together as an outdoor room.",
    types: ["str"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Piazza_Navona_%28Rome%29_at_night.jpg/330px-Piazza_Navona_%28Rome%29_at_night.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Night view across Piazza Navona.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Piazza_Navona" },
      },
    ],
    street: {
      whereItLeads:
        "Piazza Navona sits between Vatican-side routes and the denser lanes toward the Pantheon and Campo de' Fiori.",
      howToExplore:
        "Cross its full length, then use side exits intentionally rather than random turns, because nearby lanes quickly become maze-like.",
      whatToLookFor: [
        "The elongated stadium footprint visible in the square's shape.",
        "Bernini's Fountain of the Four Rivers and surrounding church facades.",
        "How artists, cafés, and movement patterns change through the day.",
      ],
      briefContext:
        "The square overlays the ancient Stadium of Domitian, later transformed into one of Rome's iconic Baroque public rooms.",
    },
  },
  {
    id: "via-dei-coronari",
    slug: "via-dei-coronari",
    name: "Via dei Coronari",
    shortDescription: "A characterful street linking major piazzas with antique shops and artisan storefronts.",
    expandedGuide:
      "Via dei Coronari is a good route when you want to move between larger landmarks without staying on a busy avenue. Its narrow line, old facades, and small shopfronts make it worth walking at a slower pace than the surrounding streets. The name is associated with the sellers of rosary beads who served pilgrims travelling toward St Peter's. Today, antique and decorative shops are part of its character, but individual businesses and opening hours change; treat browsing as an invitation, not a promise of any specific stock.",
    types: ["str", "shop"],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Roma_Via_dei_Coronari.jpg/330px-Roma_Via_dei_Coronari.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        alt: "Historic buildings along Via dei Coronari.",
        source: { label: "Wikimedia Commons via Wikipedia", url: "https://en.wikipedia.org/wiki/Via_dei_Coronari" },
      },
    ],
    street: {
      whereItLeads:
        "It connects Piazza Navona side lanes toward Tiber approaches and works well as a calmer alternative route in this area.",
      howToExplore:
        "Walk slowly end-to-end, using it as a low-stress connector before returning to busier squares.",
      whatToLookFor: [
        "Renaissance-era facades and doorway details.",
        "Antique-oriented storefront windows and small galleries.",
        "Shifts in noise level compared with nearby major streets.",
      ],
      briefContext:
        "Historically tied to pilgrims and craftsmen, the street remains associated with antiques and architectural charm.",
    },
    shop: {
      shoppingCharacter:
        "Via dei Coronari leans toward antiques, decorative objects, and boutique-level browsing rather than mass retail.",
      whatToShopFor: ["Antique and vintage decor pieces", "Prints and small artworks", "Specialty gifts with old-Rome aesthetic"],
      whereToShop: [
        { name: "Antique dealers along Via dei Coronari", whyVisit: "The street's defining specialty; ideal for curated browsing." },
        { name: "Independent galleries near Piazza Navona edge", whyVisit: "Good for art-focused souvenirs with local character." },
        { name: "Craft boutiques in nearby side lanes", whyVisit: "Useful for smaller, portable pieces and gifts." },
      ],
      practicalAdvice: [
        "For higher-value antiques, ask about provenance and return policy clearly.",
        "Shops can keep variable opening windows; this is best as a flexible browse stop.",
      ],
    },
  },
]
