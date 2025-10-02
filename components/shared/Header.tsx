"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { translations as t } from "@/lib/translations"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass-effect">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">{t.hero.name}</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.about}
          </a>
          <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.education}
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.experience}
          </a>
          <a href="#technologies" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.technologies}
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.projects}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
