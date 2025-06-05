"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  Car,
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

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/CarloSzMz/repos?sort=updated&per_page=6")
        if (response.ok) {
          const data = await response.json()
          setRepos(data)
        }
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Te contactaré pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 día"
    if (diffDays < 7) return `${diffDays} días`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} semanas`
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} meses`
    return `${Math.ceil(diffDays / 365)} años`
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
    "Lenguajes de Programación": [
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
    "Frameworks & Librerías": [
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
    "Bases de Datos": [
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
    "Cloud & Servicios": [
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

  const education = [
    {
      title: "Grado Superior Desarrollo de Aplicaciones Web",
      period: "Sept. 2023 - May. 2024",
      description: "Especialización en desarrollo web full-stack, tecnologías modernas y frameworks actuales.",
    },
    {
      title: "Grado Superior Desarrollo Aplicaciones Multiplataforma",
      period: "Sept. 2021 - May. 2023",
      description:
        "Desarrollo de aplicaciones para múltiples plataformas, programación orientada a objetos y bases de datos.",
    },
    {
      title: "Grado Medio Sistemas Microinformáticos y Redes",
      period: "Sept. 2019 - May. 2021",
      description: "Fundamentos de sistemas informáticos, redes, hardware y administración de sistemas.",
    },
  ]

  const experience = [
    {
      company: "ADDINGTECHNOLOGY",
      position: "Full-Stack Developer",
      period: "Dic. 2024 - Actualmente",
      description:
        "Desarrollo full-stack con Angular, desarrollo back-end SpringBoot, nuevas funcionalidades, utilización de BBDD Oracle, SQL y PLSQL",
      current: true,
    },
    {
      company: "ICSOLUTIONS",
      position: "Prácticas",
      period: "Marz. 2024 - Jun. 2024",
      description:
        "Prácticas del GS Desarrollo de aplicaciones web. Programación front-end con twig, desarrollo de nuevas funcionalidades, desarrollo de ERPs",
    },
    {
      company: "APTA SOLUTIONS (GRUPO TRICISE)",
      position: "Front-End Developer",
      period: "Marz. 2023 - Ago. 2023",
      description:
        "Resolución de problemas, consultas a bases de datos Oracle, uso de metodologías ágiles como SCRUM, utilización de Clarify PPM y Rally, programación front-end y gel-scripting",
    },
  ]

  const skills = [
    { name: "Capacidad comunicativa", icon: "💬" },
    { name: "Resolución de problemas", icon: "🧩" },
    { name: "Trabajo en equipo", icon: "👥" },
    { name: "Control de versiones Git", icon: "🔀" },
  ]

  const languages = [
    { name: "Español", level: "Nativo", flag: "🇪🇸" },
    { name: "Inglés", level: "C1 Advanced Cambridge", flag: "🇬🇧" },
    { name: "Valenciano", level: "Nivel B1", flag: "🏴" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b glass-effect">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Carlos Sanz</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Formación
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experiencia
            </a>
            <a href="#technologies" className="text-sm font-medium hover:text-primary transition-colors">
              Tecnologías
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center floating">
              <img
                src="/carlos.jpg"
                alt="Foto de Carlos Sanz Muñoz"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Carlos Sanz Muñoz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Desarrollador Full Stack</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especializado en desarrollo web con experiencia en tecnologías modernas y metodologías ágiles. Apasionado
              por crear soluciones eficientes y escalables.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="hover-card">
              <a href="#contact">Contactar</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-card">
              <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Ver GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre mí</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Experiencia Profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web y sistemas
                  empresariales. Especializado en tecnologías como PHP, Java, JavaScript y TypeScript.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Habilidades Clave
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Idiomas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{lang.flag}</span>
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
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formación Académica</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{edu.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <CardDescription>{edu.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{exp.position}</CardTitle>
                        {exp.current && <Badge className="bg-green-500 hover:bg-green-600">Actual</Badge>}
                      </div>
                      <p className="font-semibold text-primary mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <CardDescription>{exp.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologías y Herramientas</h2>
          <div className="grid gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <Card key={category} className="hover-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techs.map((tech) => (
                      <div
                        key={tech.name}
                        className={`tech-icon flex flex-col items-center p-6 rounded-xl glass-effect cursor-pointer group ${tech.color}`}
                      >
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                          <img
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-12 h-12 object-contain"
                            crossOrigin="anonymous"
                          />
                        </div>
                        <span className="text-sm font-medium text-center group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground">Mis proyectos más recientes disponibles en GitHub</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Cargando proyectos...</span>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <Card key={repo.id} className="hover-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{repo.name}</CardTitle>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <CardDescription className="min-h-[3rem]">
                        {repo.description || "Sin descripción disponible"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                              ></div>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
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
                        Actualizado hace {formatDate(repo.updated_at)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" asChild className="hover-card">
                  <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver todos los proyectos
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-card">
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderé lo antes posible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover-card">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="hover-card">
              <CardHeader>
                <CardTitle>Conecta conmigo</CardTitle>
                <CardDescription>Sígueme en mis redes sociales y plataformas profesionales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start hover-card" asChild>
                  <a href="https://www.linkedin.com/in/carlosanzmunoz/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start hover-card" asChild>
                  <a href="https://github.com/CarloSzMz" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <p className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    Disponible para proyectos freelance
                  </p>
                  <p className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    Respuesta en 24-48 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 glass-effect">
        <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Carlos Sanz Muñoz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
