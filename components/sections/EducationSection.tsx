"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { translations as t } from "@/lib/translations"

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

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-20 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container max-w-4xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-12" variants={fadeInUp}>
          {t.education.title}
        </motion.h2>
        <div className="space-y-6">
          {t.education.items.map((edu: any, index: number) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="hover-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{edu.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <CardDescription>{edu.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
