import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.scss";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contato";
import { useState } from "react";
import Aside from "@/components/Aside";
import Menu from "@/components/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const data = {
    name: "Ericsson Gomes",
    title: "Web Developer",
    email: "contato@ericssongomes.com",
    tel: "+55 (21) 96629-6556",
    birthday: "3 de Maio, 1994",
    local: "Rio de Janeiro, Brasil",
    linkedin: "https://linkedin.com/in/ericssongomes/",
    instagram: "https://instagram.com/ericsson.costagomes/",
    github: "https://github.com/NanoThecnolog",
    avatar: "/my-avatar.png"
  }

  const [activeSection, setActiveSection] = useState("about")

  function renderSection() {
    switch (activeSection) {
      case "about":
        return <About />
      case "resume":
        return <Resume />
      case "portfolio":
        return <Portfolio />
      default:
        return <About />
    }
  }
  function handleMenuClick(value: string) {
    setActiveSection(value)
  }
  return (
    <>
      <Head>
        <title>Ericsson Gomes - Portfolio</title>
        <meta name="description" content="Desenvolvedor web FullStack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Aside data={data} />
          <article className={styles.article}>
            <Menu handleMenuClick={handleMenuClick} activeSection={activeSection} />
            <section>
              {renderSection()}
            </section>
          </article>
        </main>
      </div>
    </>
  )
}
