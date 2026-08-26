import { IoBookOutline } from 'react-icons/io5'
import styles from './styles.module.scss'
import Degrees from '../ui/Degrees'
import Skills from '../ui/Skills'

export default function Resume() {

    const formacao = [
        {
            local: 'Centro Universitário IBMR',
            period: '2023 - 2027',
            description: 'Curso de Sistemas de Informação. Iniciado em outubro de 2023 com previsão de finalização em novembro de 2027.'
        },
        {
            local: 'Desenvolvimento Web Full Stack',
            period: '2020 - 2022',
            description: 'Cursos na plataforma Udemy de Desenvolvimento de sistemas para web. Foram desenvolvidos mais de 20 projetos, aplicando as principais tecnologias, como: HTML, CSS, PHP, SQL, JavaScript, MySQL, PostgreSQL, Python, Nodejs.'
        }
    ]
    const skills = [
        {
            name: 'Next.js',
            percent: 95
        },
        {
            name: 'Vue.js',
            percent: 80
        },
        {
            name: 'Typescript',
            percent: 90
        },
        {
            name: 'PostgreSQL',
            percent: 85
        },
        {
            name: 'Node.js',
            percent: 75
        },
        {
            name: 'Express.js',
            percent: 80
        },
        {
            name: 'PHP',
            percent: 65
        },
        {
            name: 'Wordpress',
            percent: 60
        },
        {
            name: 'Abap',
            percent: 55
        },
        {
            name: 'Inglês',
            percent: 75
        }
    ]
    return (
        <section id='resumo' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>Trajetória</span>
                    <h2>Resumo</h2>
                </header>
                <div className={styles.formacao}>
                    <div className={styles.title}>
                        <div className={styles.icon}>
                            <IoBookOutline />
                        </div>
                        <h3>Formação</h3>
                    </div>
                    <div className={styles.degrees}>
                        {formacao.map((form, index) => (
                            <Degrees degree={form} key={index} />
                        ))}
                    </div>
                </div>
                <div className={styles.skillContainer}>
                    <h4>Skills</h4>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <Skills skill={skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
