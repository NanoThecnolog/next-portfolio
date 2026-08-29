import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './styles.module.scss'

interface FooterProps {
    data: {
        name: string
        linkedin: string
        instagram: string
        github: string
    }
}

export default function Footer({ data }: FooterProps) {
    const { name, linkedin, instagram, github } = data

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <a href='#inicio' className={styles.logo}>
                        ericssongomes<span>.com</span>
                    </a>
                    <p>Criação de sites, hospedagem, domínios, emails e SSL — soluções web completas.</p>
                </div>
                <div className={styles.socials}>
                    <a href={linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
                    <a href={instagram} target='_blank' rel='noopener noreferrer' aria-label='Instagram'><FaInstagram /></a>
                    <a href={github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaGithub /></a>
                </div>
            </div>
            <div className={styles.copy}>
                <p>© {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
                <Image
                    src='/hostinger.webp'
                    alt='Selo de parceria Hostinger'
                    width={120}
                    height={45}
                    className={styles.badge}
                />
                <p>Feito com Next.js <span>⚡</span> Rio de Janeiro</p>
            </div>
        </footer>
    )
}
