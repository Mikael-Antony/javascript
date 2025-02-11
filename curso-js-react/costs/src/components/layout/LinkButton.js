import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text }) {
    return (
        <div className={styles.btncon}>
            <Link className={styles.btn} to={to}>
                {text}
            </Link>
        </div>
    )
}

export default LinkButton