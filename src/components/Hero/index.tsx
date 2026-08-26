import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.scss";

interface HeroProps {
  data: {
    name: string;
    roles: string[];
    headline: string;
    local: string;
    linkedin: string;
    instagram: string;
    github: string;
    avatar: string;
  };
}

const chips = [
  "Next.js",
  "Express",
  "Nest.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
];

export default function Hero({ data }: HeroProps) {
  const { name, roles, headline, local, linkedin, instagram, github, avatar } =
    data;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 75 + Math.random() * 65);
      } else {
        charIndex -= 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % roles.length;
          timer = setTimeout(tick, 450);
          return;
        }
        timer = setTimeout(tick, 40);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [roles]);

  const stats = [
    { value: "6+", label: "Anos de experiência" },
    { value: `${/*projects.length*/ 20}+`, label: "Projetos publicados" },
    { value: "100%", label: "Foco no cliente" },
  ];

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Disponível para novos projetos
          </span>
          <p className={styles.kicker}>Olá, eu sou</p>
          <h1>{name}</h1>
          <h2 className={styles.typed} aria-label={roles.join(", ")}>
            <span aria-hidden="true">{typed}</span>
            <span className={styles.caret} />
          </h2>
          <p className={styles.pitch}>{headline}</p>
          <div className={styles.ctas}>
            <a href="#projetos" className={styles.primary}>
              Ver projetos
            </a>
            <a href="#contato" className={styles.secondary}>
              Fale comigo
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.avatarFrame}>
            <div className={styles.avatarInner}>
              <Image
                src={avatar}
                alt={`Avatar de ${name}`}
                fill
                priority
                sizes="(max-width: 900px) 260px, 320px"
              />
            </div>
          </div>
          <span className={`${styles.chip} ${styles.chipA}`}>{chips[0]}</span>
          <span className={`${styles.chip} ${styles.chipB}`}>{chips[1]}</span>
          <span className={`${styles.chip} ${styles.chipC}`}>{chips[2]}</span>
          <span className={`${styles.chip} ${styles.chipD}`}>{chips[3]}</span>
          <span className={`${styles.chip} ${styles.chipE}`}>{chips[4]}</span>
          <span className={`${styles.chip} ${styles.chipF}`}>{chips[5]}</span>
          <span className={styles.location}>📍 {local}</span>
        </div>
      </div>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
