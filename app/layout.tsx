import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carlos Sanz Portfolio",
  description:
    "Portfolio profesional de Carlos Sanz Muñoz, desarrollador Full Stack especializado en PHP, Java, JavaScript, TypeScript y tecnologías modernas. Diseño cyberpunk futurista.",
  generator: 'v0.dev',
  keywords: ['Carlos Sanz', 'Full Stack Developer', 'PHP', 'Java', 'JavaScript', 'TypeScript', 'Portfolio', 'Cyberpunk'],
  authors: [{ name: 'Carlos Sanz Muñoz' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00ffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false} 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
