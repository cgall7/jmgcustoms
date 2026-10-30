export type Project = {
  slug: string;
  title: string;
  wood: string;
  type: string;
  dimensions?: string;
  summary: string;
  story: string[];
  /** Real photos in /public. Empty until the shop supplies them (or the
   * revisions PDF has none for this project) — the project page shows a
   * placeholder frame instead of a stand-in photo. */
  photos: string[];
  heroAlt?: string;
  cover?: string;
};

// Array order is the /work display order: tables lead, kitchen and room
// projects follow.
export const PROJECTS: Project[] = [
  {
    slug: "county-line-table",
    title: "The County Line Table",
    wood: "Maple",
    type: "Custom Map Inlay",
    summary:
      "A custom bar table inlaid with a map of Chester County, made to be enjoyed by everyone who comes to the farm to visit and spend time with the horses.",
    story: [
      "The client had a map of Chester County and wanted a unique way to display it, so we inlaid it into a custom bar table — a piece made to be enjoyed by everyone who comes to the farm to visit and spend time with the horses.",
    ],
    photos: ["01"].map(
      (n) => `/gallery/county-line-table/county-line-${n}.jpg`,
    ),
    heroAlt:
      "Round maple bar table with a Chester County map inlaid in the top",
  },
  {
    slug: "dietl-family-kitchen-table",
    title: "The Dietl Family Kitchen Table",
    wood: "White Oak",
    type: "Custom Table",
    summary:
      "Fluted legs and breadboard ends on a table big enough for everyday meals and the holidays, built to be lived around for years to come.",
    story: [
      "The Dietl family was looking to update their kitchen table and wanted something they could use every day without worrying about the wear and tear that comes with family life.",
      "They wanted the table to be a highlight of their kitchen, but more importantly, a place where their family could gather — especially when their grandchildren came over for dinner.",
      "The goal was to build something beautiful enough to stand out, but durable enough to be lived around for years to come. They were drawn to the natural knots in the wood and its warm, light tone, so we paired the tabletop with fluted legs and breadboard ends to give it a look that feels both familiar and unexpected.",
    ],
    photos: ["02", "03", "04", "05", "06", "07", "08"].map(
      (n) => `/gallery/dietl-family-kitchen-table/dietl-${n}.jpg`,
    ),
    heroAlt:
      "The Dietl family kitchen table with black chairs in their open kitchen",
  },
  {
    slug: "ascension-press-conference-table",
    title: "Conference Table at Ascension Press",
    wood: "Maple",
    type: "Custom Table",
    summary:
      "A live edge conference table with bowtie joinery, built for a team that gathers around it every day.",
    story: [
      "Ascension Press is a Catholic publishing company who prioritizes a team culture in their work space. They wanted a table where everyone in the office could gather, share lunch, work on projects, and get to know the people they work with every day.",
      "We designed this live edge table that showcases the bowtie joinery.",
    ],
    photos: ["01", "02", "03", "04", "05", "06", "07"].map(
      (n) => `/gallery/ascension-press-conference-table/ascension-${n}.jpg`,
    ),
  },
  {
    slug: "english-elm-dining-table",
    title: "English Elm Dining Table",
    wood: "English Elm",
    type: "Kitchen Table",
    summary: "A kitchen table built to showcase the character of English elm.",
    story: [],
    photos: ["01", "02", "03", "04", "05", "06", "07", "08"].map(
      (n) => `/gallery/english-elm-dining-table/elm-${n}.jpg`,
    ),
  },
  {
    slug: "log-house-kitchen",
    title: "Log Cabin Kitchen Renovation",
    wood: "Custom Cabinetry",
    type: "Full Kitchen Renovation",
    summary:
      "Designed and built for a family of 14, with handcrafted cabinetry and a space made for gathering and everyday life.",
    story: [
      "Designed and built for a family of 14, with handcrafted cabinetry and a space made for gathering and everyday life.",
    ],
    photos: ["02", "05", "08", "11", "15", "17", "20", "28"].map(
      (n) => `/gallery/kitchen/kitchen-${n}.jpg`,
    ),
    heroAlt: "Custom kitchen with handcrafted cabinetry",
  },
  {
    slug: "laundry-room",
    title: "The Laundry Room that Works",
    wood: "Custom Cabinetry",
    type: "Full Room Renovation",
    summary: "A hardworking laundry room, thoughtfully designed.",
    story: ["A hardworking laundry room, thoughtfully designed."],
    photos: ["01"].map((n) => `/gallery/laundry-room/laundry-room-${n}.jpg`),
  },
  {
    slug: "family-room-entertainment-center",
    title: "Family Room Entertainment Center",
    wood: "White Oak",
    type: "Custom Entertainment Center",
    summary:
      "Built around the natural knots and warm tones of white oak, with room for the family to make the space their own.",
    story: [
      "After moving into a new home, this family wanted to add storage to their living room without sacrificing the warmth and character of the space.",
      "We designed this piece around the natural knots and warm tones of the wood, while leaving room for the family to display photos and artwork that make the space feel like their own.",
    ],
    photos: ["01", "02", "03", "04", "05"].map(
      (n) => `/gallery/family-room-entertainment-center/entertainment-${n}.jpg`,
    ),
  },
  {
    slug: "platform-bed",
    title: "The Platform Bed",
    wood: "Birds Eye Maple",
    type: "Bed",
    summary:
      "A gift for a newlywed couple, with a simple design that lets the natural character of the wood take center stage.",
    story: [
      "This platform bed was made as a gift for a newlywed couple, with a simple design that lets the natural character of the wood take center stage.",
    ],
    photos: ["01", "02", "03"].map(
      (n) => `/gallery/platform-bed/platform-bed-${n}.jpg`,
    ),
  },
  {
    slug: "herringbone-heirloom-crib",
    title: "The Herringbone Bedside Crib",
    wood: "Birds Eye Maple",
    type: "Baby Crib with Detachable Side",
    summary:
      "A crib made to match the couple's platform bed, built to one day be passed down to their child's children.",
    story: [
      "After we made their platform bed, this couple came back to us with some exciting news — they were expecting their first baby. They wanted a crib that would feel like it belonged with their bed, while also being practical enough to sit right beside it during those early months.",
      "We carried the same natural character and timeless feel into the crib, adding a herringbone detail to give it something of its own. The goal was to make a piece that would work beautifully in their home now, but could one day be passed down to their child's children.",
      "A crib made for the beginning of their family, with the hope that it would become part of their family for generations.",
    ],
    photos: ["02", "03", "04", "05", "06", "07", "08"].map(
      (n) => `/gallery/herringbone-heirloom-crib/crib-${n}.jpg`,
    ),
  },
  {
    slug: "ultimate-drop-zone",
    title: "Ultimate Drop Zone",
    wood: "Painted",
    type: "Full Room Design",
    summary:
      "A full mudroom build out — lockers, benches, and painted wall details, designed and built from the ground up.",
    story: [
      "Full room design. We designed, built, and painted the lockers, benches, and details on the walls.",
    ],
    photos: ["01", "02", "03", "04", "05", "06", "07", "08"].map(
      (n) => `/gallery/ultimate-drop-zone/drop-zone-${n}.jpg`,
    ),
  },
  {
    slug: "altar-for-chapel",
    title: "Altar for Chapel",
    wood: "Black Walnut",
    type: "Custom Design and Build",
    summary: "Clean, simple lines designed to point to Heaven.",
    story: [
      "Design with the intention that the clean and simple lines point to Heaven.",
    ],
    photos: ["01", "02", "03"].map(
      (n) => `/gallery/altar-for-chapel/altar-${n}.jpg`,
    ),
  },
];

// Supplied round-two photography. Original project URLs stay stable.
const revisionPhotos: Record<string, string[]> = {
  "county-line-table": ["p02-01.png"],
  "platform-bed": ["p18-01.jpg", "p19-01.jpg", "p20-01.jpg", "p21-01.jpg"],
  "ultimate-drop-zone": Array.from(
    { length: 11 },
    (_, i) => `p${30 + i}-01.jpg`,
  ),
  "english-elm-dining-table": ["p42-01.jpg"],
  "log-house-kitchen": ["p03-01.png"],
  "laundry-room": [
    "laundry-edited.webp",
    "p44-01.jpg",
    "p45-01.jpg",
    "p46-01.jpg",
    "p47-01.jpg",
  ],
  "altar-for-chapel": ["p41-01.jpg"],
};
for (const project of PROJECTS) {
  const additions = revisionPhotos[project.slug];
  if (additions)
    project.photos = [
      ...additions.map((n) => `/revisions/${n}`),
      ...project.photos,
    ];
}
PROJECTS.splice(1, 0, {
  slug: "massive-gathering-table",
  title: "Massive Gathering Table",
  wood: "White Oak",
  type: "Custom Table",
  summary: "A generous white oak table made for gathering.",
  story: [
    "A generous white oak tabletop, sculpted pedestal bases, and room to gather. From the first boards in the workshop to its place in the home, the natural character of the wood leads the design.",
  ],
  photos: [
    "p22-01.jpg",
    "workshop-privacy.webp",
    ...Array.from({ length: 6 }, (_, i) => `p${24 + i}-01.jpg`),
  ].map((n) => `/revisions/${n}`),
});

const studioCovers: Record<string, string> = {
  "platform-bed": "bed-cover.webp",
  "herringbone-heirloom-crib": "crib-cover.webp",
  "altar-for-chapel": "altar-cover.webp",
  "massive-gathering-table": "gathering-cover.webp",
  "dietl-family-kitchen-table": "gathering-cover.webp",
};
for (const project of PROJECTS) {
  if (studioCovers[project.slug])
    project.cover = `/revisions/${studioCovers[project.slug]}`;
}

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
