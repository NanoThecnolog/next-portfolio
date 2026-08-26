import styles from './styles.module.scss'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

interface ProjectProps {
    project: {
        image: string,
        name: string,
        link: string
        tags: string[]
    },
}

export default function Project({ project }: ProjectProps) {
    return (
        <a
            className={styles.container}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Ver projeto ${project.name}`}
        >
            <div className={styles.imageContainer}>
                <img src={project.image} alt={`Print do projeto ${project.name}`} loading='lazy' />
                <div className={styles.overlay}>
                    <span><FaArrowUpRightFromSquare size={14} /> Ver projeto</span>
                </div>
            </div>
            <div className={styles.info}>
                <h5>{project.name}</h5>
                <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </a>
    )
}
