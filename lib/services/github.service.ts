import { GitHubRepo, GitHubStats, GitHubUser } from "@/types"

const GITHUB_API_BASE = "https://api.github.com"

class GitHubService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map()
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

  private async fetchWithCache<T>(url: string): Promise<T> {
    const cached = this.cache.get(url)
    const now = Date.now()

    if (cached && now - cached.timestamp < this.CACHE_DURATION) {
      return cached.data as T
    }

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()
    this.cache.set(url, { data, timestamp: now })

    return data as T
  }

  async getUser(username: string): Promise<GitHubUser> {
    return this.fetchWithCache<GitHubUser>(`${GITHUB_API_BASE}/users/${username}`)
  }

  async getRepos(username: string, params?: { sort?: string; per_page?: number }): Promise<GitHubRepo[]> {
    const queryParams = new URLSearchParams({
      sort: params?.sort || "updated",
      per_page: String(params?.per_page || 100),
    })

    return this.fetchWithCache<GitHubRepo[]>(`${GITHUB_API_BASE}/users/${username}/repos?${queryParams}`)
  }

  async getStats(username: string): Promise<GitHubStats> {
    const [userData, reposData] = await Promise.all([
      this.getUser(username),
      this.getRepos(username, { per_page: 100 }),
    ])

    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
    const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0)

    return {
      totalStars,
      totalForks,
      totalRepos: userData.public_repos,
      followers: userData.followers,
    }
  }

  clearCache(): void {
    this.cache.clear()
  }
}

export const githubService = new GitHubService()
