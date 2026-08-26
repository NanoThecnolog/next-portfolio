import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Servicos from "@/components/Servicos";
import Resume from "@/components/Resume";
import Github from "@/components/Github";
import Portfolio from "@/components/Portfolio";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { data } from "@/common/vars/data";
import { getGithubStats } from "@/lib/github";
import type { GithubStats } from "@/lib/github";

interface PageProps {
    github: GithubStats | null;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const github = await getGithubStats("NanoThecnolog");
    return {
        props: { github },
        revalidate: 3600,
    };
};

export default function Home({ github }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Ericsson Gomes | Desenvolvedor Web Full Stack</title>
                <meta name="description" content="Criação de sites, hospedagem de sites e serviços, caixas de email, contratação de domínios e certificado SSL. Desenvolvedor web Full Stack no Rio de Janeiro." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.page}>
                <Header />
                <main>
                    <Hero data={data} />
                    <Reveal><About data={data} /></Reveal>
                    <Reveal><Servicos /></Reveal>
                    <Reveal><Resume /></Reveal>
                    <Reveal><Github stats={github} /></Reveal>
                    <Reveal><Portfolio /></Reveal>
                    <Reveal><Contato data={data} /></Reveal>
                </main>
                <Footer data={data} />
            </div>
        </>
    )
}
