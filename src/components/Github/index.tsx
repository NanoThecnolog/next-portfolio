import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import type { GithubStats } from '@/lib/github'

const LANG_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Vue: '#41b883',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4f5d95',
    SCSS: '#c6538c',
    Python: '#3572A5',
    Shell: '#89e051',
}

function langColor(name: string): string {
    return LANG_COLORS[name] ?? '#2dd4bf'
}

interface GithubProps {
    stats: GithubStats | null
}

export default function Github({ stats }: GithubProps) {
    if (!stats) return null

    const { username, publicRepos, followers, commits, stars, forks, since, languages, topRepos } = stats

    const statCards = [
        { label: 'Repositórios', value: publicRepos },
        { label: 'Commits', value: commits !== null ? commits.toLocaleString("pt-BR") : null },
        { label: 'Stars', value: stars.toLocaleString("pt-BR") },
        { label: 'Forks', value: forks.toLocaleString("pt-BR") },
        { label: 'Seguidores', value: followers.toLocaleString("pt-BR") },
        { label: 'Desde', value: since },
    ]

    const maxLangCount = languages.length > 0 ? languages[0].count : 1

    return (
        <section id="github" className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>Código aberto</span>
                    <h2>GitHub</h2>
                </header>

                <div className={styles.statsGrid}>
                    {statCards.map((card) => (
                        <div key={card.label} className={styles.statCard}>
                            <span className={styles.statValue}>{card.value ?? "—"}</span>
                            <span className={styles.statLabel}>{card.label}</span>
                        </div>
                    ))}
                </div>

                {languages.length > 0 && (
                    <div className={styles.languages}>
                        <h3>Linguagens</h3>
                        <div className={styles.langGrid}>
                            {languages.map((lang) => (
                                <div key={lang.name} className={styles.langItem}>
                                    <div className={styles.langHeader}>
                                        <span
                                            className={styles.langDot}
                                            style={{ backgroundColor: langColor(lang.name) }}
                                        />
                                        <span className={styles.langName}>{lang.name}</span>
                                        <span className={styles.langCount}>{lang.count}</span>
                                    </div>
                                    <div className={styles.langBar}>
                                        <div
                                            className={styles.langFill}
                                            style={{
                                                width: `${(lang.count / maxLangCount) * 100}%`,
                                                backgroundColor: langColor(lang.name),
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {topRepos.length > 0 && (
                    <div className={styles.topRepos}>
                        <h3>Repositórios em destaque</h3>
                        <div className={styles.reposGrid}>
                            {topRepos.map((repo) => (
                                <a
                                    key={repo.name}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.repoCard}
                                >
                                    <div className={styles.repoTop}>
                                        <span className={styles.repoName}>{repo.name}</span>
                                        {repo.language && (
                                            <span
                                                className={styles.repoLang}
                                                style={{ color: langColor(repo.language) }}
                                            >
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    {repo.description && (
                                        <p className={styles.repoDesc}>{repo.description}</p>
                                    )}
                                    <div className={styles.repoBottom}>
                                        <span className={styles.repoStars}>★ {repo.stars}</span>
                                        <FiExternalLink size={14} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.profileLink}
                >
                    <FaGithub size={18} />
                    Ver perfil completo no GitHub
                    <FiExternalLink size={14} />
                </a>
            </div>
        </section>
    )
}
