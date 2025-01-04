import styles from './styles.module.scss'

interface TestimonalProps {
    content: {
        name: string,
        text: string
        image: string
    }
}

export default function Testimonial({ content }: TestimonalProps) {
    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <img src={content.image} alt={content.name} />
            </div>
            <h4>{content.name}</h4>
            <p title={content.text}>{content.text}</p>
        </div>
    )
}