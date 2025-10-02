"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { translations as t } from "@/lib/translations"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Star,
  GitFork,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { GitHubStats } from "@/components/portfolio/github-stats"
import { useToast } from "@/hooks/use-toast"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
  topics: string[]
}

// Animation variants
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

function Portfolio() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    let mounted = true

    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/CarloSzMz/repos?sort=updated&per_page=6")
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        const data = await response.json()

        if (mounted && Array.isArray(data)) {
          setRepos(data)
        }
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchRepos()

    return () => {
      mounted = false
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Validate configuration
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS no está configurado correctamente. Por favor, configura las variables de entorno.")
      }

      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error("Por favor, completa todos los campos del formulario.")
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Por favor, introduce una dirección de email válida.")
      }

      // Initialize EmailJS
      emailjs.init(publicKey)

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
      )

      toast({
        title: t.contact.form.success,
        variant: "default",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      console.error("Error sending email:", errorMessage)

      // Provide more specific error messages
      let userMessage = t.contact.form.error
      if (errorMessage.includes("EmailJS no está configurado")) {
        userMessage = "El servicio de email no está configurado. Por favor, contacta al administrador."
      } else if (errorMessage.includes("completa todos los campos")) {
        userMessage = errorMessage
      } else if (errorMessage.includes("email válida")) {
        userMessage = errorMessage
      }

      toast({
        title: userMessage,
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return `1 ${t.time.day}`
    if (diffDays < 7) return `${diffDays} ${t.time.days}`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} ${diffDays < 14 ? t.time.week : t.time.weeks}`
    if (diffDays < 365)
      return `${Math.ceil(diffDays / 30)} ${Math.ceil(diffDays / 30) === 1 ? t.time.month : t.time.months}`
    return `${Math.ceil(diffDays / 365)} ${Math.ceil(diffDays / 365) === 1 ? t.time.year : t.time.years}`
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      PHP: "#4F5D95",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Vue: "#2c3e50",
      React: "#61dafb",
      "C#": "#239120",
      Go: "#00ADD8",
      Rust: "#dea584",
    }
    return colors[language || ""] || "#8b949e"
  }

  const technologies = {
    [t.technologies.categories.languages]: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "text-blue-400",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        color: "text-purple-400",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "text-orange-400",
      },
    ],
    [t.technologies.categories.frameworks]: [
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        color: "text-red-400",
      },
      {
        name: "Laravel",
        icon: "/Laravel.png",
        color: "text-red-500",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        color: "text-green-400",
      },
      {
        name: "CodeIgniter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        color: "text-orange-500",
      },
    ],
    [t.technologies.categories.databases]: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "text-blue-500",
      },
      {
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        color: "text-red-600",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "text-green-500",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "text-yellow-500",
      },
    ],
    [t.technologies.categories.cloud]: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        color: "text-orange-400",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "text-orange-600",
      },
      {
        name: "Bitbucket",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
        color: "text-blue-500",
      },
    ],
  }

  const skills = [
    { name: t.about.keySkills.communication, icon: "💬" },
    { name: t.about.keySkills.problemSolving, icon: "🧩" },
    { name: t.about.keySkills.teamwork, icon: "👥" },
    { name: t.about.keySkills.versionControl, icon: "🔀" },
  ]

  const languages = [
    { name: t.about.languages.spanish, level: t.about.languages.spLevel, flag: "🇪🇸" },
    { name: t.about.languages.english, level: t.about.languages.enLevel, flag: "🇬🇧" },
    { name: t.about.languages.valencian, level: t.about.languages.vaLevel, flag: "🏴" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Education Section */}
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

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-4 bg-muted/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container max-w-4xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-center mb-12" variants={fadeInUp}>
            {t.experience.title}
          </motion.h2>
          <div className="space-y-6">
            {t.experience.items.map((exp: any, index: number) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover-card">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{exp.position}</CardTitle>
                          {index === 0 && <Badge className="bg-green-500 hover:bg-green-600">{t.experience.current}</Badge>}
                        </div>
                        <p className="font-semibold text-primary mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" aria-hidden="true" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <CardDescription>{exp.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
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

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-4 bg-muted/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
              {t.projects.title}
            </motion.h2>
            <motion.p className="text-muted-foreground" variants={fadeInUp}>
              {t.projects.subtitle}
            </motion.p>
          </div>

          <GitHubStats username="CarloSzMz" />

          <div className="mt-12">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">{t.projects.loading}</span>
              </div>
            ) : repos.length > 0 ? (
              <>
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" variants={staggerContainer}>
                {repos.map((repo) => (
                  <motion.div key={repo.id} variants={fadeInUp}>
                    <Card className="hover-card h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{repo.name}</CardTitle>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`View ${repo.name} on GitHub`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                        <CardDescription className="min-h-[3rem]">
                          {repo.description || t.projects.noDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-end">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-4">
                            {repo.language && (
                              <span className="flex items-center gap-1">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                                  aria-hidden="true"
                                ></div>
                                {repo.language}
                              </span>
                            )}
                            <span className="flex items-center gap-1" aria-label={`${repo.stargazers_count} stars`}>
                              <Star className="h-3 w-3" aria-hidden="true" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1" aria-label={`${repo.forks_count} forks`}>
                              <GitFork className="h-3 w-3" aria-hidden="true" />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>
                        {repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <Badge key={topic} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground">
                          {t.projects.updatedAgo} {formatDate(repo.updated_at)}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="text-center mt-8" variants={fadeInUp}>
                <Button variant="outline" asChild className="hover-card">
                  <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t.projects.viewAll}
                  </a>
                </Button>
              </motion.div>
            </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No se pudieron cargar los proyectos en este momento.</p>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="border-t py-8 px-4 glass-effect">
        <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
          <p>
            &copy; 2025 {t.hero.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function Page() {
  return <Portfolio />
}
