"use client"

import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { TechnologiesSection } from "@/components/sections/TechnologiesSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
