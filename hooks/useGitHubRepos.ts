"use client"

import { useState, useEffect } from "react"
import { GitHubRepo } from "@/types"
import { githubService } from "@/lib/services/github.service"

export function useGitHubRepos(username: string, limit: number = 6) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchRepos = async () => {
      try {
        setLoading(true)
        const data = await githubService.getRepos(username, {
          sort: "updated",
          per_page: limit,
        })

        if (mounted && Array.isArray(data)) {
          setRepos(data)
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          const error = err instanceof Error ? err : new Error("Error fetching repos")
          setError(error)
          console.error("Error fetching repos:", error)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchRepos()

    return () => {
      mounted = false
    }
  }, [username, limit])

  return { repos, loading, error }
}
