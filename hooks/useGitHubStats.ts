"use client"

import { useState, useEffect } from "react"
import { GitHubStats } from "@/types"
import { githubService } from "@/lib/services/github.service"

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchStats = async () => {
      try {
        setLoading(true)
        const data = await githubService.getStats(username)

        if (mounted) {
          setStats(data)
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          const error = err instanceof Error ? err : new Error("Error fetching stats")
          setError(error)
          console.error("Error fetching GitHub stats:", error)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchStats()

    return () => {
      mounted = false
    }
  }, [username])

  return { stats, loading, error }
}
