// Shared selections keep Home and Craft consistent after photo curation.
export const MATERIAL_PHOTOS = [
  { src: "/revisions/p13-02.jpg", alt: "Prepared hardwood boards stacked in the workshop" },
];
export const BUILD_PHOTOS = [
  { src: "/revisions/p06-02.jpg", alt: "Milled hardwood components ready for assembly" },
  { src: "/revisions/p10-01.jpg", alt: "Cutting a hardwood board in the workshop" },
  { src: "/revisions/p12-01.jpg", alt: "Clamps holding a furniture assembly square" },
];
export const JOINERY_PHOTOS = [
  { src: "/revisions/p15-01.jpg", alt: "Close view of fitted dovetail joints" },
  { src: "/revisions/p16-01.jpg", alt: "Dovetailed drawer assemblies on the workbench" },
];
export const HOME_CRAFT_PHOTOS = [...MATERIAL_PHOTOS, ...BUILD_PHOTOS, ...JOINERY_PHOTOS];
