"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCommit, GitPullRequest, Star, Users } from "lucide-react"
import { useGitHubStats } from "@/hooks/useGitHubStats"

export function GitHubStats({ username }: { username: string }) {
  const { stats, loading } = useGitHubStats(username)

  if (loading || !stats) return null

  const statsData = [
    { icon: Star, label: "Total Estrellas", value: stats.totalStars, color: "text-yellow-500" },
    { icon: GitCommit, label: "Repositorios", value: stats.totalRepos, color: "text-blue-500" },
    { icon: GitPullRequest, label: "Total Forks", value: stats.totalForks, color: "text-green-500" },
    { icon: Users, label: "Seguidores", value: stats.followers, color: "text-purple-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {statsData.map((stat) => (
        <Card key={stat.label} className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <stat.icon className={`h-4 w-4 ${stat.color}`} aria-hidden="true" />
              {stat.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
