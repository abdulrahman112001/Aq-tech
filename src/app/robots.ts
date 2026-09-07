import type { MetadataRoute } from "next"
import { companyData } from "@/data/company"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${companyData.url}/sitemap.xml`,
  }
}
