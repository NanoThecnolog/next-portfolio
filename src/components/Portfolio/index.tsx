import { useState } from 'react'
import { projects } from '@/data/projects'
import styles from './styles.module.scss'
import Project from '../ui/Projects'

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'express', label: 'Express' },
    { id: 'nestjs', label: 'Nest.js' },
    { id: 'typescript', label: 'Typescript' },
    { id: 'postgresql', label: 'PostgreSQL' },
    { id: 'vuejs', label: 'Vue.js' },
    { id: 'restapi', label: 'REST API' },
    { id: 'wordpress', label: 'Wordpress' },
]

const filterAliases: Record<string, string[]> = {
    nextjs: ['nextjs', 'javascript', 'css', 'html'],
    vuejs: ['vuejs', 'vue'],
    restapi: ['restapi', 'rest'],
    postgresql: ['postgresql', 'postgre'],
}

function matchesFilter(project: typeof projects[number], filterId: string): boolean {
    if (filterId === 'todos') return true
    const tags = project.tags.map((t) => t.toLowerCase())
    const accepted = filterAliases[filterId] ?? [filterId]
    return tags.some((tag) => accepted.includes(tag))
}

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('todos')

    const visibleProjects = projects.filter((p) => matchesFilter(p, activeFilter))

    return (
        <section id='projetos' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>Trabalhos</span>
                    <h2>Projetos</h2>
                </header>
                <ul className={styles.filterContainer}>
                    {categories.map((cat) => (
                        <li key={cat.id}>
                            <button
                                className={`${styles.filterItem} ${activeFilter === cat.id ? styles.active : ''}`}
                                onClick={() => setActiveFilter(cat.id)}
                            >
                                {cat.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {visibleProjects.length > 0 ? (
                    <div className={styles.projectsContainer}>
                        {visibleProjects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>Nenhum projeto neste filtro ainda — novos projetos em breve.</p>
                )}
            </div>
        </section>
    )
}
