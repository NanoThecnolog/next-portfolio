import styles from './styles.module.scss'

interface SkillProps {
    skill: {
        name: string,
        percent: number
    }
}

export default function Skills({ skill }: SkillProps) {
    return (
        <div className={styles.info}>
            <div className={styles.nameContainer}>
                <h5>{skill.name}</h5>
                <p>{skill.percent}%</p>
            </div>
            <div className={styles.barraTotal}>
                <div className={styles.preenchimento} style={{ width: `${skill.percent}%` }}></div>
            </div>
        </div>
    )
}