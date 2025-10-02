"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { translations as t } from "@/lib/translations"
import { skills, languages } from "@/data"

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

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-muted/50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-12" variants={fadeInUp}>
          {t.about.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp}>
            <Card className="hover-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                  {t.about.professionalExperience.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.about.professionalExperience.description}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="hover-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" aria-hidden="true" />
                  {t.about.keySkills.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <span className="text-lg" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="hover-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                  {t.about.languages.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg" aria-hidden="true">
                          {lang.flag}
                        </span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
