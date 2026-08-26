import { CiMobile3 } from 'react-icons/ci'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import styles from './styles.module.scss'

interface AboutProps {
    data: {
        email: string
        tel: string
        birthday: string
        local: string
    }
}

export default function About({ data }: AboutProps) {
    const { email, tel, birthday, local } = data

    const facts = [
        { icon: <MdOutlineMailOutline />, label: 'Email', value: email },
        { icon: <CiMobile3 />, label: 'Telefone', value: tel },
        { icon: <FaCalendarAlt />, label: 'Aniversário', value: birthday },
        { icon: <FiMapPin />, label: 'Localização', value: local }
    ]

    return (
        <section id='sobre' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>Quem sou</span>
                    <h2>Sobre mim</h2>
                </header>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>Sou desenvolvedor web Full Stack, carioca e apaixonado por construir soluções que funcionam de verdade. Há mais de seis anos transformo ideias em sites e sistemas rápidos, seguros e com a identidade de cada marca — do primeiro rascunho até o projeto no ar.</p>
                        <p>Como Full Stack, domino todo o ciclo do projeto: design, front-end, back-end, banco de dados, domínio, hospedagem e certificado de segurança. Na prática, isso significa comunicação direta, menos intermediários e um único ponto responsável pela qualidade da entrega e pelo cumprimento dos prazos.</p>
                        <p>Trabalho com tecnologias modernas como React, Next.js, Vue.js, Node.js, TypeScript e PostgreSQL, sempre priorizando código limpo, performance e uma experiência impecável em qualquer dispositivo. Atualmente curso Sistemas de Informação para ir ainda mais longe em arquitetura e gestão de projetos. Meu compromisso é entregar resultado real para o seu negócio — e uma parceria que você vai querer repetir.</p>
                    </div>
                    <div className={styles.facts}>
                        {facts.map((fact) => (
                            <div key={fact.label} className={styles.fact}>
                                <span className={styles.factIcon}>{fact.icon}</span>
                                <div>
                                    <h4>{fact.label}</h4>
                                    <p>{fact.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
