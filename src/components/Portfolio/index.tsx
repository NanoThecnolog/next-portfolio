import { projects } from '@/data/projects'
import styles from './styles.module.scss'
import Project from '../ui/Projects'


export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div>
                <ul className={styles.filterContainer}>
                    <li className={`${styles.filterItem} ${styles.active}`}>Todos</li>
                    <li className={styles.filterItem}>Javascript</li>
                    <li className={styles.filterItem}>Typescript</li>
                    <li className={styles.filterItem}>Nextjs</li>
                    <li className={styles.filterItem}>Vuejs</li>
                    <li className={styles.filterItem}>Wordpress</li>
                </ul>
            </div>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <Project project={project} key={index} />
                ))}
            </div>
        </div>
    )
}