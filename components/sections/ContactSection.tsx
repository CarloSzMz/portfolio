"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { translations as t } from "@/lib/translations"
import { useContactForm } from "@/hooks/useContactForm"

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

export function ContactSection() {
  const { formData, setFormData, sending, handleSubmit } = useContactForm()

  return (
    <motion.section
      id="contact"
      className="py-20 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
            {t.contact.title}
          </motion.h2>
          <motion.p className="text-muted-foreground" variants={fadeInUp}>
            {t.contact.subtitle}
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t.contact.form.title}</CardTitle>
                <CardDescription>{t.contact.form.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={sending}>
                    <Mail className="mr-2 h-4 w-4" />
                    {sending ? t.contact.form.sending : t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t.contact.connect.title}</CardTitle>
                <CardDescription>{t.contact.connect.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.linkedin.com/in/carlosanzmunoz/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <p className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {t.contact.connect.availability}
                  </p>
                  <p className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {t.contact.connect.responseTime}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
