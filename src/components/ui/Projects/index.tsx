import styles from './styles.module.scss'

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
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={project.image} alt={project.name} />
            </div>
            <div>
                <h5>{project.name}</h5>
                <p>{project.tags.join(", ")}</p>
            </div>


        </div>
    )
}