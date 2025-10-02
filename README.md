# Portfolio - Carlos Sanz Muñoz

Un portfolio moderno y responsivo desarrollado con Next.js 15, TypeScript y Tailwind CSS. Incluye funcionalidades como internacionalización, tema oscuro/claro, estadísticas de GitHub en tiempo real y formulario de contacto con EmailJS.

## 🚀 Características

- **Diseño Moderno**: Interfaz moderna con animaciones suaves usando Framer Motion
- **Internacionalización**: Soporte completo para múltiples idiomas (actualmente español)
- **Tema Dinámico**: Cambia automáticamente entre tema claro y oscuro
- **Estadísticas de GitHub**: Muestra estadísticas en tiempo real de tus repositorios
- **Formulario de Contacto**: Integración con EmailJS para envío de emails
- **Completamente Responsivo**: Optimizado para móviles, tablets y desktop
- **Accesibilidad**: Cumple con estándares de accesibilidad WCAG
- **SEO Optimizado**: Meta tags, sitemap y robots.txt incluidos

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS con componentes shadcn/ui
- **Animaciones**: Framer Motion
- **Email**: EmailJS para formularios de contacto
- **Iconos**: Lucide React
- **Gestión de Estado**: React Hooks

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/CarloSzMz/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno para EmailJS (ver sección siguiente)

4. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador


## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # Páginas Next.js con App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página principal del portfolio
│   ├── robots.ts         # Configuración de robots.txt
│   └── sitemap.ts        # Configuración de sitemap.xml
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de interfaz (shadcn/ui)
│   └── portfolio/        # Componentes específicos del portfolio
├── lib/                  # Utilidades y configuraciones
│   └── translations.ts   # Traducciones de la aplicación
├── public/               # Archivos estáticos
└── styles/               # Estilos adicionales
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
