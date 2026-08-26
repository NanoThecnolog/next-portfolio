import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './styles.module.scss'

const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'resumo', label: 'Resumo' },
    { id: 'github', label: 'GitHub' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
]

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        navItems.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href='#inicio' className={styles.logo} onClick={() => setMenuOpen(false)}>
                    ericssongomes<span>.com</span>
                </a>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label='Navegação principal'>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={activeSection === item.id ? styles.active : ''}
                                    aria-current={activeSection === item.id ? 'true' : undefined}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className={styles.ctaItem}>
                            <a href='#contato' className={styles.cta} onClick={() => setMenuOpen(false)}>
                                Orçamento
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
        </header>
    )
}
