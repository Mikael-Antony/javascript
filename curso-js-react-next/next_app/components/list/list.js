import { useEffect, useState } from 'react'
import styles from './list.module.css'



export default function List() {

    const [todos, setTodos] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((resp) => {
            setTodos(resp)
        })
        .catch((err) => console.log(err))
    }, [])
    

    return (
        <>
            <ul className={styles.todolist}>
                {todos.id}
            </ul>
        </>

)
}
