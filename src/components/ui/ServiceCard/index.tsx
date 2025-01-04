import styles from './styles.module.scss'

interface ServiceProps {
    card: {
        title: string,
        description: string,
        icon: React.ReactNode
    }
}

export default function ServiceCard({ card }: ServiceProps) {
    return (
        <div className={styles.itemContainer}>
            <div>{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
        </div>
    )
}