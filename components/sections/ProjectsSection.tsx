"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { translations as t } from "@/lib/translations"
import { useGitHubRepos } from "@/hooks/useGitHubRepos"
import { formatDate, getLanguageColor } from "@/lib/utils"
import { GitHubStats } from "@/components/portfolio/github-stats"

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

export function ProjectsSection() {
  const { repos, loading } = useGitHubRepos("CarloSzMz", 6)

  return (
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
  )
}
