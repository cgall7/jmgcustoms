import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/our-story", "/the-craft", "/shop", "/start-a-project", ...PROJECTS.map(p => `/work/${p.slug}`)].map(path => ({url: `https://jmgcustoms.vercel.app${path}`}));
}
