import styles from './styles.module.scss'

interface DegreeProps {
    degree: {
        local: string,
        period: string,
        description: string
    }
}
export default function Degrees({ degree }: DegreeProps) {
    return (
        <div className={styles.item}>
            <div className={styles.localContainer}>
                <div className={styles.pin}>
                    <div className={styles.core}></div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <h4>{degree.local}</h4>
                <h5>{degree.period}</h5>
                <p>{degree.description}</p>
            </div>
        </div>
    )
}