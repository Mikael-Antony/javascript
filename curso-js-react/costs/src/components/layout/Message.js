
import { useEffect, useState } from 'react'
import styles from './Message.module.css'

function Message({ type, msg }) {

    const [ Visible, setVisible] = useState(false)

    useEffect(() => ())
    
    return (
        <>
            {Visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message