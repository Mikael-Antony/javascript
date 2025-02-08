import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer_container}>
            <p>
                &copy; <a href="https://www.github.com/Mikael-Antony" target="_blank">Mikael Antony</a>
            </p>
        </footer>
    )
}