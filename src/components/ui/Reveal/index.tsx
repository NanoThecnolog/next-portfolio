import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface RevealProps {
    children: React.ReactNode
}

export default function Reveal({ children }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true)
            return
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.12 }
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
            {children}
        </div>
    )
}
