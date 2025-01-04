import Image from 'next/image'
import styles from './styles.module.scss'

interface ClientProps {
    client: {
        name: string,
        link: string,
        image: string
    }
}

export default function Clients({ client }: ClientProps) {
    return (
        <div className={styles.container} title={client.name}>
            <div className={styles.imageContainer}>
                <a href={client.link} target='_blank' rel='noopener noreferrer'>
                    <Image src={client.image} alt={client.name} fill />
                </a>
            </div>
        </div>
    )
}