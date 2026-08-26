import { useState } from 'react'
import { CiMobile3 } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiSend } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import styles from './styles.module.scss'

interface ContatoProps {
    data: {
        name: string
        email: string
        tel: string
        whatsapp: string
        local: string
    }
}

export default function Contato({ data }: ContatoProps) {
    const { email, tel, whatsapp, local } = data
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

    function handleChange(field: keyof typeof form) {
        return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [field]: event.target.value })
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const subject = encodeURIComponent(`Contato via portfólio — ${form.nome}`)
        const body = encodeURIComponent(`${form.mensagem}\n\n—\n${form.nome}\n${form.email}`)
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    }

    const channels = [
        { icon: <MdOutlineMailOutline />, label: 'Email', value: email, href: `mailto:${email}` },
        { icon: <CiMobile3 />, label: 'Telefone / WhatsApp', value: tel, href: whatsapp },
        { icon: <FiMapPin />, label: 'Localização', value: local, href: undefined }
    ]

    return (
        <section id='contato' className={styles.section}>
            <div className={styles.inner}>
                <header className={styles.header}>
                    <span className={styles.kicker}>Vamos conversar</span>
                    <h2>Contato</h2>
                    <p>Tem um projeto em mente ou precisa de um orçamento? Envie sua mensagem e retorno o mais breve possível.</p>
                </header>
                <div className={styles.grid}>
                    <div className={styles.channels}>
                        {channels.map((channel) => {
                            const content = (
                                <>
                                    <span className={styles.channelIcon}>{channel.icon}</span>
                                    <div>
                                        <h4>{channel.label}</h4>
                                        <p>{channel.value}</p>
                                    </div>
                                </>
                            )
                            return channel.href ? (
                                <a key={channel.label} href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel='noopener noreferrer' className={`${styles.channel} ${styles.linked}`}>
                                    {content}
                                </a>
                            ) : (
                                <div key={channel.label} className={styles.channel}>{content}</div>
                            )
                        })}
                        <a href={whatsapp} target='_blank' rel='noopener noreferrer' className={styles.whatsButton}>
                            <FaWhatsapp size={20} /> Chamar no WhatsApp
                        </a>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldRow}>
                            <label className={styles.field}>
                                <span>Nome</span>
                                <input type='text' value={form.nome} onChange={handleChange('nome')} placeholder='Seu nome' required />
                            </label>
                            <label className={styles.field}>
                                <span>Email</span>
                                <input type='email' value={form.email} onChange={handleChange('email')} placeholder='voce@email.com' required />
                            </label>
                        </div>
                        <label className={styles.field}>
                            <span>Mensagem</span>
                            <textarea rows={5} value={form.mensagem} onChange={handleChange('mensagem')} placeholder='Conte sobre seu projeto...' required />
                        </label>
                        <button type='submit' className={styles.submit}>
                            Enviar mensagem <FiSend size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
