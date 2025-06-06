import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced Cyberpunk Color Palette
        "cyber": {
          "black": "#0a0a0f",
          "dark": "#1a0a1f", 
          "purple": "#0f1a2e",
          "accent": "#1f0a3a",
          "surface": "#0f0f1e",
        },
        "neon": {
          "cyan": "#00ffff",
          "blue": "#0080ff", 
          "purple": "#9333ea",
          "magenta": "#ff00ff",
          "pink": "#ff0080",
          "green": "#00ff80",
          "orange": "#ff6000",
          "red": "#ff0040",
          "yellow": "#ffff00",
        },
        "glow": {
          "cyan": "rgba(0, 255, 255, 0.5)",
          "purple": "rgba(147, 51, 234, 0.5)",
          "pink": "rgba(255, 0, 150, 0.5)",
          "blue": "rgba(0, 128, 255, 0.5)",
        },
        // Legacy colors for compatibility
        "dark-bg": "#0a0a0f",
        "dark-surface": "#1a0a1f",
        "dark-purple": "#0f1a2e",
        "dark-accent": "#1f0a3a",
        "neon-blue": "#00ffff",
        "neon-purple": "#9333ea",
        "neon-green": "#00ff80",
        "neon-orange": "#ff6000",
        "neon-pink": "#ff0080",
        "neon-yellow": "#ffff00",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor" 
          },
          "50%": { 
            boxShadow: "0 0 10px currentColor, 0 0 25px currentColor, 0 0 40px currentColor" 
          },
        },
        cyberpunkPulse: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "neon-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor" 
          },
          "50%": { 
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor" 
          },
        },
        "slide-glow": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 3s ease-in-out infinite alternate",
        "cyberpunk-pulse": "cyberpunkPulse 4s ease-in-out infinite alternate",
        "shimmer": "shimmer 3s infinite",
        "float": "float 4s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "slide-glow": "slide-glow 0.6s ease",
      },
      backgroundImage: {
        "cyberpunk-gradient": "linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 25%, #0f1a2e 50%, #1f0a3a 75%, #0a0a1f 100%)",
        "neon-gradient": "linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 150, 0.1))",
        "glow-gradient": "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(255, 0, 150, 0.2) 50%, transparent 70%)",
      },
      boxShadow: {
        "cyberpunk": "0 0 20px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "neon-cyan": "0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)",
        "neon-pink": "0 0 20px rgba(255, 0, 150, 0.4), 0 0 40px rgba(255, 0, 150, 0.2)",
        "neon-purple": "0 0 20px rgba(147, 51, 234, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)",
        "cyberpunk-hover": "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 255, 255, 0.4), 0 0 20px rgba(255, 0, 150, 0.3)",
      },
      backdropBlur: {
        "cyberpunk": "15px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
