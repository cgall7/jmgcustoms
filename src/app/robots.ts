import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {return {rules:{userAgent:"*",allow:"/"},sitemap:"https://jmgcustoms.vercel.app/sitemap.xml"};}
