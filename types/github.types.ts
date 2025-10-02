export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
  topics: string[]
}

export interface GitHubStats {
  totalStars: number
  totalForks: number
  totalRepos: number
  followers: number
}

export interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
}
