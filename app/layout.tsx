import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

const title = "Carlos Sanz Muñoz | Desarrollador Full Stack"
const description = "Portfolio profesional de Carlos Sanz Muñoz, desarrollador Full Stack especializado en Angular, Spring Boot, PHP, Laravel, Java, JavaScript y TypeScript. Experiencia en desarrollo web moderno y metodologías ágiles."
const url = "https://carlosanz.dev"
const image = `${url}/opengraph-image.png`

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Carlos Sanz",
    "Desarrollador Full Stack",
    "Angular",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Java",
    "JavaScript",
    "TypeScript",
    "Desarrollo Web",
    "Portfolio",
  ],
  authors: [{ name: "Carlos Sanz Muñoz", url }],
  creator: "Carlos Sanz Muñoz",
  publisher: "Carlos Sanz Muñoz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url,
    title,
    description,
    siteName: "Carlos Sanz Muñoz Portfolio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@carlosanzmz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Sanz Muñoz",
  url: "https://carlosanz.dev",
  image: "https://carlosanz.dev/carlos.jpg",
  jobTitle: "Desarrollador Full Stack",
  description: "Desarrollador Full Stack especializado en Angular, Spring Boot, PHP, Laravel, Java, JavaScript y TypeScript",
  sameAs: [
    "https://github.com/CarloSzMz",
    "https://www.linkedin.com/in/carlosanzmunoz/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "ADDINGTECHNOLOGY",
  },
  knowsAbout: [
    "Angular",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Java",
    "JavaScript",
    "TypeScript",
    "Oracle Database",
    "MySQL",
    "MongoDB",
    "AWS",
    "Git",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Grado Superior Desarrollo de Aplicaciones Web",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
