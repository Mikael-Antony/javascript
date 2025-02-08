import Link from 'next/link';

import styles from './navBar.module.css'

export default function NavBar() {
    return (
        <header className={styles.nav_container}>
            <ul>
                <li>
                    <Link href='/'>icon</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href="/products">Produtos</Link>
                </li>
                <li>
                    <Link href='/contact'>Contato</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </header>
    )
}