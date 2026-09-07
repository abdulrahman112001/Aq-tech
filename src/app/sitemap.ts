import type { MetadataRoute } from "next"
import { companyData } from "@/data/company"

// Single-page site — the in-page sections (#about, #services, #portfolio, …)
// aren't separate crawlable routes, so only the homepage is listed here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: companyData.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
