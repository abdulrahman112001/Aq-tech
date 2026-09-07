import type { Metadata, Viewport } from "next"
import { Inter, Manrope, Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"
import { Analytics } from "@vercel/analytics/next"
import { companyData } from "@/data/company"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
})

// TODO: companyData.url is a placeholder — replace it with the real
// production domain before launch (see src/data/company.ts).
const siteUrl = companyData.url

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: {
    default: "AQTech | Technology Partner for Web, Mobile & AI Products",
    template: "%s | AQTech",
  },
  description:
    "AQTech designs and engineers web, mobile, and AI-powered products that help ambitious companies launch faster, scale smarter, and stay ahead.",
  keywords: [
    "AQTech",
    "software development company",
    "web development",
    "mobile app development",
    "AI development",
    "cloud consulting",
    "UI/UX design agency",
    "digital transformation",
    "شركة برمجة",
    "تطوير مواقع",
    "تطوير تطبيقات",
  ],
  authors: [{ name: "AQTech", url: siteUrl }],
  creator: "AQTech",
  publisher: "AQTech",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AQTech | Technology Partner for Web, Mobile & AI Products",
    description:
      "We design and engineer web, mobile, and AI-powered products for ambitious companies.",
    siteName: "AQTech",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQTech | Technology Partner for Web, Mobile & AI Products",
    description:
      "We design and engineer web, mobile, and AI-powered products for ambitious companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyData.name,
  legalName: companyData.legalName,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description: companyData.shortDescription,
  foundingDate: companyData.founded,
  email: companyData.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: companyData.location,
  },
  sameAs: [
    companyData.linkedin,
    companyData.twitter,
    companyData.github,
    companyData.instagram,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${cairo.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
