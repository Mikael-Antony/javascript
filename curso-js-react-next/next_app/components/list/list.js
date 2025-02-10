import styles from './list.module.css'


export default function Todos({ todos }) {
    return (
        <>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>

)

}
export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos',)
    const todos = await data.json()
    return { props: { todos } }
}