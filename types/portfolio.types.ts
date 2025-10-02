export interface Technology {
  name: string
  icon: string
  color: string
}

export interface TechnologyCategory {
  [category: string]: Technology[]
}

export interface Skill {
  name: string
  icon: string
}

export interface Language {
  name: string
  level: string
  flag: string
}

export interface EducationItem {
  title: string
  period: string
  description: string
}

export interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
