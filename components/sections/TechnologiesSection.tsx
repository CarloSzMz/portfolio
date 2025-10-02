"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { translations as t } from "@/lib/translations"
import { technologies } from "@/data"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function TechnologiesSection() {
  return (
    <motion.section
      id="technologies"
      className="py-20 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-12" variants={fadeInUp}>
          {t.technologies.title}
        </motion.h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div key={category} variants={fadeInUp}>
              <Card className="hover-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techs.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className={`tech-icon flex flex-col items-center p-6 rounded-xl glass-effect cursor-pointer group ${tech.color}`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                          <img
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-12 h-12 object-contain"
                            crossOrigin="anonymous"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-medium text-center group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
