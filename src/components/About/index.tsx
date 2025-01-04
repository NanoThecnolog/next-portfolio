import { MdWeb } from 'react-icons/md'
import styles from './styles.module.scss'
import { FaLaptopCode } from 'react-icons/fa6'
import { ImMobile } from 'react-icons/im'
import { HiCamera } from 'react-icons/hi2'
import ServiceCard from '../ui/ServiceCard'
import Testimonial from '../ui/Testimonials'
import Clients from '../ui/Clients'
//import 'swiper/css'
import { SwiperSlide, Swiper } from 'swiper/react'
import { useRef, useState } from 'react'

export default function About() {

    const cardService = [
        {
            title: 'Web Design',
            description: 'Criação de Layouts modernos e de alta qualidade para atender cada cliente de maneira única e personalizada.',
            icon: <MdWeb size={50} color='#ffdb70' />
        },
        {
            title: 'Web Developer',
            description: 'Desenvolvimento de sites Utilizando: Javascript, ReactJS, VueJS, NextJS para o front-end, Node.jS, Typescript, PHP, PostGreSQL, e MySQL para o Back-end. Código limpo e estruturado. Buscando Responsividade, elegância, objetividade e desempenho.',
            icon: <FaLaptopCode size={50} color='#ffdb70' />
        },
        {
            title: 'MObile Apps',
            description: 'Desenvolvimento profissional de aplicativos utilizando Java, IONIC e React Native.',
            icon: <ImMobile size={50} color='#ffdb70' />
        },
        {
            title: 'Fotografia',
            description: 'Fotografia autoral de pessoas, animais, paisagens e locais que visito como hobbie.',
            icon: <HiCamera size={50} color='#ffdb70' />
        },
    ]

    const testimonials = [
        {
            id: 1,
            name: 'Elizangela Mara',
            text: 'Trabalho rápido e conciso. Ele fez o meu website do jeito que eu queria. Entregou tudo bem antes do prazo e me ajudou bastante em algumas escolhas de design. Meus clientes aumentaram bastante depois que o site ficou pronto. As pessoas me encontram com mais facilidade, e o atendimento ficou mais dinâmico. Muito bom trabalho!',
            image: '/avatar-5.png'
        },
        {
            id: 2,
            name: 'Tania Vianna',
            text: 'Trabalhar com Ericsson foi uma experiência inovadora na minha carreira como HeadHunter. Quando decidi ampliar minha presença online, quem melhor me atendeu foi o Ericsson, me auxiliando nas escolhas de design e aconselhando também quanto ao conteúdo do site. Melhor escolha!',
            image: '/avatar-2.png'
        }
    ]

    const clients = [
        {
            name: 'MBLifeCorretora',
            link: 'https://mblifecorretora.com.br/',
            image: '/logo-mblife.png'
        },
        {
            name: 'Solurh',
            link: 'https://solurh.pro/',
            image: '/logo-Solurh.png'
        },
        {
            name: 'Progeo Solutions',
            link: 'https://progeosolutions.com/',
            image: '/logo_pro_geo.png'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.aboutText}>
                <p>Sou um desenvolvedor web Full Stack do Rio de Janeiro, atualmente cursando Sistemas de Informação e em busca de novas oportunidades na área. Destaco-me pela habilidade de transformar as ideias dos clientes em websites funcionais, responsivos e visualmente atrativos.</p>
                <p>Minha abordagem única combina conhecimento técnico, dedicação aos desafios e a capacidade de adicionar um toque pessoal a cada projeto, tornando-os experiências digitais autênticas e memoráveis.</p>
            </div>
            <div className={styles.whatIdo}>
                <h3>O que faço</h3>
                <div className={styles.items}>
                    {cardService.map((card, index) => (
                        <ServiceCard card={card} key={index} />

                    ))}
                </div>
            </div>
            <div className={styles.testmonialsContainer}>
                <h3>Depoimentos</h3>
                <div className={styles.testimonials}>
                    {testimonials.map((test, index) => (
                        <div key={test.id} className={styles.testimonial}>
                            <Testimonial content={test} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.clientsContainer}>
                <h3>clientes</h3>
                <div className={styles.clients}>
                    {clients.map((client, index) => (
                        <Clients client={client} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}