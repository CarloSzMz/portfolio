export const translations = {
  nav: {
    about: "Sobre mí",
    education: "Formación",
    experience: "Experiencia",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    name: "Carlos Sanz Muñoz",
    role: "Desarrollador Full Stack",
    description: "Especializado en desarrollo web con experiencia en tecnologías modernas y metodologías ágiles. Apasionado por crear soluciones eficientes y escalables.",
    contactButton: "Contactar",
    viewGithub: "Ver GitHub"
  },
  about: {
    title: "Sobre mí",
    professionalExperience: {
      title: "Experiencia Profesional",
      description: "Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web y sistemas empresariales. Especializado en tecnologías como PHP, Java, JavaScript y TypeScript."
    },
    keySkills: {
      title: "Habilidades Clave",
      communication: "Capacidad comunicativa",
      problemSolving: "Resolución de problemas",
      teamwork: "Trabajo en equipo",
      versionControl: "Control de versiones Git"
    },
    languages: {
      title: "Idiomas",
      spanish: "Español",
      spLevel: "Nativo",
      english: "Inglés",
      enLevel: "C1 Advanced Cambridge",
      valencian: "Valenciano",
      vaLevel: "Nivel B1"
    }
  },
  education: {
    title: "Formación Académica",
    items: [
      {
        title: "Grado Superior Desarrollo de Aplicaciones Web",
        period: "Sept. 2023 - May. 2024",
        description: "Especialización en desarrollo web full-stack, tecnologías modernas y frameworks actuales."
      },
      {
        title: "Grado Superior Desarrollo Aplicaciones Multiplataforma",
        period: "Sept. 2021 - May. 2023",
        description: "Desarrollo de aplicaciones para múltiples plataformas, programación orientada a objetos y bases de datos."
      },
      {
        title: "Grado Medio Sistemas Microinformáticos y Redes",
        period: "Sept. 2019 - May. 2021",
        description: "Fundamentos de sistemas informáticos, redes, hardware y administración de sistemas."
      }
    ]
  },
  experience: {
    title: "Experiencia Profesional",
    current: "Actual",
    items: [
      {
        company: "ADDINGTECHNOLOGY",
        position: "Full-Stack Developer",
        period: "Dic. 2024 - Actualmente",
        description: "Desarrollo full-stack con Angular, desarrollo back-end SpringBoot, nuevas funcionalidades, utilización de BBDD Oracle, SQL y PLSQL"
      },
      {
        company: "ICSOLUTIONS",
        position: "Prácticas",
        period: "Marz. 2024 - Jun. 2024",
        description: "Prácticas del GS Desarrollo de aplicaciones web. Programación front-end con twig, desarrollo de nuevas funcionalidades, desarrollo de ERPs"
      },
      {
        company: "APTA SOLUTIONS (GRUPO TRICISE)",
        position: "Front-End Developer",
        period: "Marz. 2023 - Ago. 2023",
        description: "Resolución de problemas, consultas a bases de datos Oracle, uso de metodologías ágiles como SCRUM, utilización de Clarify PPM y Rally, programación front-end y gel-scripting"
      }
    ]
  },
  technologies: {
    title: "Tecnologías y Herramientas",
    categories: {
      languages: "Lenguajes de Programación",
      frameworks: "Frameworks & Librerías",
      databases: "Bases de Datos",
      cloud: "Cloud & Servicios"
    }
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Mis proyectos más recientes disponibles en GitHub",
    loading: "Cargando proyectos...",
    noDescription: "Sin descripción disponible",
    viewAll: "Ver todos los proyectos",
    updatedAgo: "Actualizado hace"
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
    form: {
      title: "Envíame un mensaje",
      description: "Completa el formulario y te responderé lo antes posible",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te contactaré pronto.",
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
    },
    connect: {
      title: "Conecta conmigo",
      description: "Sígueme en mis redes sociales y plataformas profesionales",
      availability: "Disponible para proyectos freelance",
      responseTime: "Respuesta en 24-48 horas"
    }
  },
  footer: {
    rights: "Todos los derechos reservados."
  },
  time: {
    day: "día",
    days: "días",
    week: "semana",
    weeks: "semanas",
    month: "mes",
    months: "meses",
    year: "año",
    years: "años"
  }
} as const
