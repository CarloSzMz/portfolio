export function getLanguageColor(language: string | null): string {
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
