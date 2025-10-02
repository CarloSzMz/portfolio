"use client"

import { translations as t } from "@/lib/translations"

export function Footer() {
  return (
    <footer className="border-t py-8 px-4 glass-effect">
      <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
        <p>
          &copy; 2025 {t.hero.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
