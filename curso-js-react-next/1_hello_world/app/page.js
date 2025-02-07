import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href='/about'>Sobre</Link>
        </li>
      </ul>
      <h1>hello world Next.js</h1>
    </div>
  )
};