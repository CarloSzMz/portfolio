"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations as t } from "@/lib/translations"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function HeroSection() {
  return (
    <motion.section className="py-20 px-4" initial="initial" animate="animate" variants={fadeInUp}>
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center floating"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/carlos.jpg"
              alt={t.hero.name}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.name}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t.hero.role}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.hero.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="hover-card">
            <a href="#contact">{t.hero.contactButton}</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="hover-card">
            <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t.hero.viewGithub}
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
