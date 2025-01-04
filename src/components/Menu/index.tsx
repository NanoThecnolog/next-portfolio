import styles from './styles.module.scss'

interface MenuProps {
    handleMenuClick: (value: string) => void
    activeSection: string
}

export default function Menu({ handleMenuClick, activeSection }: MenuProps) {
    return (
        <nav className={styles.menu}>
            <div className={styles.title}>
                <h1>{activeSection === 'about' ? 'sobre mim' : activeSection === 'resume' ? 'resumo' : activeSection === 'portfolio' ? 'portfolio' : ''}</h1>
                <div className={styles.border}></div>
            </div>
            <div className={styles.list}>
                <ul>
                    <li className={activeSection === 'about' ? styles.active : ''} onClick={() => handleMenuClick('about')}>Sobre mim</li>
                    <li className={activeSection === 'resume' ? styles.active : ''} onClick={() => handleMenuClick('resume')}>Resumo</li>
                    <li className={activeSection === 'portfolio' ? styles.active : ''} onClick={() => handleMenuClick('portfolio')}>Portfolio</li>

                </ul>
            </div>

        </nav>
    )
}