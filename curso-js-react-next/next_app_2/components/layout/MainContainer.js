import Footer from "./Footer";
import NavBar from "./navBar";

import styles from './MainContainer.module.css'

export default function MainContainer({ children }) {
    return (
        <>
            <NavBar />
            <div className={styles.MainContainer}>
                {children}
            </div>
            <Footer />
        </>
    )
}