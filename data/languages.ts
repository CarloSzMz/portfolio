import { Language } from "@/types"
import { translations as t } from "@/lib/translations"

export const languages: Language[] = [
  { name: t.about.languages.spanish, level: t.about.languages.spLevel, flag: "🇪🇸" },
  { name: t.about.languages.english, level: t.about.languages.enLevel, flag: "🇬🇧" },
  { name: t.about.languages.valencian, level: t.about.languages.vaLevel, flag: "🏴" },
]
