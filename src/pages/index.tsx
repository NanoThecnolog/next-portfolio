import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import { useState } from "react";
import Aside from "@/components/Aside";
import Menu from "@/components/Menu";
import { data } from "@/common/vars/data";


export default function Home() {


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
        className={`${styles.page}`}
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
