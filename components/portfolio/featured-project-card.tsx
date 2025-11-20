"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Shield } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { FeaturedProject } from "@/data"

interface FeaturedProjectCardProps {
  project: FeaturedProject
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} className="mb-12">
      <Card className="hover-card overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-auto flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {project.status === "published" && (
              <Badge className="absolute top-4 right-4 bg-green-500 text-white">Published</Badge>
            )}
          </div>

          <div className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <p className="text-sm text-muted-foreground">{project.longDescription}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.links.playstore && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.links.playstore} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Play Store
                    </a>
                  </Button>
                )}

                {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}

                {project.links.privacy && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.links.privacy} target="_blank" rel="noopener noreferrer">
                      <Shield className="mr-2 h-4 w-4" />
                      Privacy
                    </a>
                  </Button>
                )}

                {project.links.live && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
