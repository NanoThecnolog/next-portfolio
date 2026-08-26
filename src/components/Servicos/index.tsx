import { FaServer } from 'react-icons/fa'
import { FiGlobe, FiPenTool, FiShield } from 'react-icons/fi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { ImMobile } from 'react-icons/im'
import { MdWeb } from 'react-icons/md'
import styles from './styles.module.scss'
import ServiceCard from '../ui/ServiceCard'
import { services } from '@/data/services'

const icons: Record<string, React.ReactNode> = {
    'criacao-sites': <MdWeb />,
    'web-design': <FiPenTool />,
    'hospedagem': <FaServer />,
    'emails': <HiOutlineEnvelope />,
    'dominios': <FiGlobe />,
    'ssl': <FiShield />,
    'mobile': <ImMobile />
}

export default function Servicos() {
    return (
        <section id='servicos' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>O que ofereço</span>
                    <h2>Serviços</h2>
                </header>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            card={{
                                title: service.title,
                                description: service.description,
                                icon: icons[service.id]
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
