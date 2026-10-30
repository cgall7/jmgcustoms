export type Project = {
  slug: string; title: string; wood: string; type: string; dimensions?: string;
  summary: string; story: string[]; photos: string[]; heroAlt?: string; cover?: string;
};

// One canonical entry per physical project. These curated photos also supply card covers.
export const PROJECTS: Project[] = [
  {
    "slug": "county-line-table",
    "title": "The County Line Table",
    "wood": "Maple",
    "type": "Custom Map Inlay",
    "summary": "A custom bar table inlaid with a map of Chester County, made to be enjoyed by everyone who comes to the farm to visit and spend time with the horses.",
    "story": [
      "The client had a map of Chester County and wanted a unique way to display it, so we inlaid it into a custom bar table — a piece made to be enjoyed by everyone who comes to the farm to visit and spend time with the horses."
    ],
    "photos": [
      "/revisions/p02-01.png"
    ],
    "heroAlt": "Round maple bar table with a Chester County map inlaid in the top",
    "cover": "/revisions/p02-01.png"
  },
  {
    "slug": "massive-gathering-table",
    "title": "Massive Gathering Table",
    "wood": "White Oak",
    "type": "Custom Table",
    "summary": "A generous white oak table made for gathering.",
    "story": [
      "A generous white oak tabletop, sculpted pedestal bases, and room to gather. From the first boards in the workshop to its place in the home, the natural character of the wood leads the design."
    ],
    "photos": [
      "/revisions/gathering-cover.webp",
      "/revisions/p28-01.jpg",
      "/revisions/p27-01.jpg"
    ],
    "cover": "/revisions/gathering-cover.webp"
  },
  {
    "slug": "ascension-press-conference-table",
    "title": "Conference Table at Ascension Press",
    "wood": "Maple",
    "type": "Custom Table",
    "summary": "A live edge conference table with bowtie joinery, built for a team that gathers around it every day.",
    "story": [
      "Ascension Press is a Catholic publishing company who prioritizes a team culture in their work space. They wanted a table where everyone in the office could gather, share lunch, work on projects, and get to know the people they work with every day.",
      "We designed this live edge table that showcases the bowtie joinery."
    ],
    "photos": [
      "/gallery/ascension-press-conference-table/ascension-01.jpg",
      "/gallery/ascension-press-conference-table/ascension-04.jpg",
      "/gallery/ascension-press-conference-table/ascension-06.jpg"
    ],
    "cover": "/gallery/ascension-press-conference-table/ascension-01.jpg"
  },
  {
    "slug": "english-elm-dining-table",
    "title": "English Elm Dining Table",
    "wood": "English Elm",
    "type": "Kitchen Table",
    "summary": "A kitchen table built to showcase the character of English elm.",
    "story": [],
    "photos": [
      "/gallery/english-elm-dining-table/elm-02.jpg",
      "/gallery/english-elm-dining-table/elm-03.jpg",
      "/gallery/english-elm-dining-table/elm-04.jpg"
    ],
    "cover": "/gallery/english-elm-dining-table/elm-02.jpg"
  },
  {
    "slug": "log-house-kitchen",
    "title": "Log Cabin Kitchen Renovation",
    "wood": "Custom Cabinetry",
    "type": "Full Kitchen Renovation",
    "summary": "Designed and built for a family of 14, with handcrafted cabinetry and a space made for gathering and everyday life.",
    "story": [
      "Designed and built for a family of 14, with handcrafted cabinetry and a space made for gathering and everyday life."
    ],
    "photos": [
      "/revisions/p03-01.png",
      "/gallery/kitchen/kitchen-15.jpg",
      "/gallery/kitchen/kitchen-28.jpg"
    ],
    "heroAlt": "Custom kitchen with handcrafted cabinetry",
    "cover": "/revisions/p03-01.png"
  },
  {
    "slug": "laundry-room",
    "title": "The Laundry Room that Works",
    "wood": "Custom Cabinetry",
    "type": "Full Room Renovation",
    "summary": "A hardworking laundry room, thoughtfully designed.",
    "story": [
      "A hardworking laundry room, thoughtfully designed."
    ],
    "photos": [
      "/revisions/laundry-edited.webp",
      "/revisions/p45-01.jpg"
    ],
    "cover": "/revisions/laundry-edited.webp"
  },
  {
    "slug": "family-room-entertainment-center",
    "title": "Family Room Entertainment Center",
    "wood": "White Oak",
    "type": "Custom Entertainment Center",
    "summary": "Built around the natural knots and warm tones of white oak, with room for the family to make the space their own.",
    "story": [
      "After moving into a new home, this family wanted to add storage to their living room without sacrificing the warmth and character of the space.",
      "We designed this piece around the natural knots and warm tones of the wood, while leaving room for the family to display photos and artwork that make the space feel like their own."
    ],
    "photos": [
      "/gallery/family-room-entertainment-center/entertainment-01.jpg",
      "/gallery/family-room-entertainment-center/entertainment-04.jpg",
      "/gallery/family-room-entertainment-center/entertainment-05.jpg"
    ],
    "cover": "/gallery/family-room-entertainment-center/entertainment-01.jpg"
  },
  {
    "slug": "platform-bed",
    "title": "The Platform Bed",
    "wood": "Birds Eye Maple",
    "type": "Bed",
    "summary": "A gift for a newlywed couple, with a simple design that lets the natural character of the wood take center stage.",
    "story": [
      "This platform bed was made as a gift for a newlywed couple, with a simple design that lets the natural character of the wood take center stage."
    ],
    "photos": [
      "/revisions/bed-cover.webp"
    ],
    "cover": "/revisions/bed-cover.webp"
  },
  {
    "slug": "herringbone-heirloom-crib",
    "title": "The Herringbone Bedside Crib",
    "wood": "Birds Eye Maple",
    "type": "Baby Crib with Detachable Side",
    "summary": "A crib made to match the couple's platform bed, built to one day be passed down to their child's children.",
    "story": [
      "After we made their platform bed, this couple came back to us with some exciting news — they were expecting their first baby. They wanted a crib that would feel like it belonged with their bed, while also being practical enough to sit right beside it during those early months.",
      "We carried the same natural character and timeless feel into the crib, adding a herringbone detail to give it something of its own. The goal was to make a piece that would work beautifully in their home now, but could one day be passed down to their child's children.",
      "A crib made for the beginning of their family, with the hope that it would become part of their family for generations."
    ],
    "photos": [
      "/revisions/crib-cover.webp",
      "/gallery/herringbone-heirloom-crib/crib-04.jpg",
      "/gallery/herringbone-heirloom-crib/crib-06.jpg"
    ],
    "cover": "/revisions/crib-cover.webp"
  },
  {
    "slug": "ultimate-drop-zone",
    "title": "Ultimate Drop Zone",
    "wood": "Painted",
    "type": "Full Room Design",
    "summary": "A full mudroom build out — lockers, benches, and painted wall details, designed and built from the ground up.",
    "story": [
      "Full room design. We designed, built, and painted the lockers, benches, and details on the walls."
    ],
    "photos": [
      "/revisions/p30-01.jpg",
      "/revisions/p37-01.jpg",
      "/revisions/p39-01.jpg"
    ],
    "cover": "/revisions/p30-01.jpg"
  },
  {
    "slug": "altar-for-chapel",
    "title": "Altar for Chapel",
    "wood": "Black Walnut",
    "type": "Custom Design and Build",
    "summary": "Clean, simple lines designed to point to Heaven.",
    "story": [
      "Design with the intention that the clean and simple lines point to Heaven."
    ],
    "photos": [
      "/gallery/altar-for-chapel/altar-01.jpg",
      "/gallery/altar-for-chapel/altar-03.jpg"
    ],
    "cover": "/gallery/altar-for-chapel/altar-01.jpg"
  }
];

export const FEATURED_PROJECT_SLUGS = ["massive-gathering-table", "log-house-kitchen", "laundry-room"] as const;

export function getProject(slug: string) { return PROJECTS.find(project => project.slug === slug); }
