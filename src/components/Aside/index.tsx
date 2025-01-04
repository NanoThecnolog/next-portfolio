import Image from 'next/image'
import styles from './styles.module.scss'
import { FaAngleDown, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiMobile3 } from 'react-icons/ci'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { useEffect, useState } from 'react'

interface AsideProps {
    data: {
        name: string
        title: string
        email: string
        tel: string
        birthday: string
        local: string
        linkedin: string
        instagram: string
        github: string
        avatar: string
    }
}

export default function Aside({ data }: AsideProps) {
    const { name, title, avatar, email, tel, birthday, local, linkedin, instagram, github } = data
    const [toggleActive, setToggleActive] = useState(true)

    function toggleClick() {
        setToggleActive(!toggleActive)
    }
    useEffect(() => {
        const div = document.getElementById('container');
        if (!div) return
        if (toggleActive) {
            div.style.maxHeight = '150px';
        } else {
            div.style.maxHeight = '617px';
        }
    }, [toggleActive])
    return (
        <aside className={styles.container} id='container'>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={avatar} alt='meu-avatar' fill />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}><h2>{name}</h2></div>
                    <div className={styles.title}><h3>{title}</h3></div>
                </div>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contacts}>
                    <div className={styles.icons}>
                        <MdOutlineMailOutline size={20} />
                    </div>
                    <div className={styles.text}>
                        <h4>Email</h4>
                        <p>{email}</p>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.icons}>
                        <CiMobile3 size={20} />
                    </div>
                    <div className={styles.text}>
                        <h4>Telefone</h4>
                        <p>{tel}</p>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.icons}>
                        <FaCalendarAlt size={20} />
                    </div>
                    <div className={styles.text}>
                        <h4>Aniversário</h4>
                        <p>{birthday}</p>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.icons}>
                        <FiMapPin size={20} />
                    </div>
                    <div className={styles.text}>
                        <h4>localização</h4>
                        <p>{local}</p>
                    </div>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <a href={linkedin} target='_blank' rel='noopener noreferrer'><FaLinkedin size={25} /></a>
                <a href={instagram} target='_blank' rel='noopener noreferrer'><FaInstagram size={25} /></a>
                <a href={github} target='_blank' rel='noopener noreferrer'><FaGithub size={25} /></a>
            </div>
            <div className={styles.toggleContainer}>
                <FaAngleDown onClick={toggleClick} />
            </div>
        </aside>
    )
}