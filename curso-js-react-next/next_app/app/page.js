import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export const metadata = {
  title: 'Home',
  keywords: 'Roupas, Calçados, Boné',
  description: 'pagina inicial',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <div className={styles.page}>
        <h1>hello world Next.js</h1>
      </div>
      <Image src={'/vercel.svg'} width='300' height='300' alt="imagem de um triangulo"/>
    </>
  )
};