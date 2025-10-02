import { translations as t } from "@/lib/translations"

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return `1 ${t.time.day}`
  if (diffDays < 7) return `${diffDays} ${t.time.days}`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} ${diffDays < 14 ? t.time.week : t.time.weeks}`
  if (diffDays < 365)
    return `${Math.ceil(diffDays / 30)} ${Math.ceil(diffDays / 30) === 1 ? t.time.month : t.time.months}`
  return `${Math.ceil(diffDays / 365)} ${Math.ceil(diffDays / 365) === 1 ? t.time.year : t.time.years}`
}
