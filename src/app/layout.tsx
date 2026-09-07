import type { Metadata, Viewport } from "next"
import { Inter, Manrope, Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"
import { Analytics } from "@vercel/analytics/next"

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

const siteUrl = "https://aqtech.example.com"

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
  },
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
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
