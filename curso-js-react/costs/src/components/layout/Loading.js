import loading from '../../img/loading.svg' 

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.container_loader}>
            <img className={styles.loader} src={loading} alt='Loading...' />
        </div>
    )
}

export default Loading