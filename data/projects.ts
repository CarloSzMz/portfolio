export interface FeaturedProject {
  id: string
  name: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: "published" | "in-development" | "completed"
  image: string
  links: {
    playstore?: string
    appstore?: string
    github?: string
    live?: string
    privacy?: string
  }
  features: string[]
  stats?: {
    downloads?: string
    users?: string
    rating?: number
  }
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "decideat",
    name: "DecidEat",
    description: "Decide donde comer",
    longDescription:
      "DecidEat es una aplicacion movil para Android que te ayuda a decidir donde comer. Guarda tus restaurantes favoritos, visualizalos en un mapa interactivo y usa la ruleta para dejar que la suerte decida.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "MapLibre",
      "Leaflet",
    ],
    category: "Mobile App",
    status: "published",
    image: "/decideat/feature-graphic.png",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.decideat.app",
      privacy: "/decideat/privacy",
    },
    features: [
      "Autenticacion con Firebase (email y Google)",
      "Gestion de restaurantes y lugares favoritos",
      "Categorizacion mediante categorias principales y subcategorias",
      "Mapa interactivo con marcadores personalizados",
      "Filtros avanzados por categorias",
      "Ruleta interactiva para decision aleatoria",
      "Sistema de amigos para compartir lugares",
      "Sincronizacion en tiempo real con Firestore",
      "Interfaz moderna con animaciones fluidas",
      "Modo oscuro y claro",
    ],
    stats: {
      rating: 5.0,
    },
  },
]
