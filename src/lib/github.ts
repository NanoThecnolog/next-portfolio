export interface GithubStats {
    username: string
    name: string
    publicRepos: number
    followers: number
    commits: number | null
    stars: number
    forks: number
    since: string
    languages: { name: string; count: number }[]
    topRepos: { name: string; description: string; stars: number; language: string | null; url: string }[]
}

interface GithubUser {
    login: string
    name: string | null
    public_repos: number
    followers: number
    created_at: string
}

interface GithubRepo {
    name: string
    description: string | null
    stargazers_count: number
    forks_count: number
    language: string | null
    fork: boolean
    html_url: string
}

interface GithubSearchResult {
    total_count: number
}

const API = "https://api.github.com"
const HEADERS = { Accept: "application/vnd.github+json" }

async function fetchJson<T>(url: string): Promise<T | null> {
    try {
        const res = await fetch(url, { headers: HEADERS })
        if (!res.ok) return null
        return (await res.json()) as T
    } catch {
        return null
    }
}

export async function getGithubStats(username: string): Promise<GithubStats | null> {
    const user = await fetchJson<GithubUser>(`${API}/users/${username}`)
    if (!user) return null

    const allRepos = await fetchJson<GithubRepo[]>(
        `${API}/users/${username}/repos?per_page=100&sort=pushed`
    )
    const repos = allRepos ?? []

    const nonForked = repos.filter((r) => !r.fork)

    const stars = nonForked.reduce((sum, r) => sum + r.stargazers_count, 0)
    const forks = nonForked.reduce((sum, r) => sum + r.forks_count, 0)

    const langCount: Record<string, number> = {}
    nonForked.forEach((r) => {
        if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1
    })
    const languages = Object.entries(langCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6)

    const topRepos = nonForked
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
        .map((r) => ({
            name: r.name,
            description: r.description || "",
            stars: r.stargazers_count,
            language: r.language,
            url: r.html_url,
        }))

    const search = await fetchJson<GithubSearchResult>(
        `${API}/search/commits?q=author:${username}`
    )

    return {
        username,
        name: user.name || username,
        publicRepos: user.public_repos,
        followers: user.followers,
        commits: search?.total_count ?? null,
        stars,
        forks,
        since: String(user.created_at).slice(0, 4),
        languages,
        topRepos,
    }
}
