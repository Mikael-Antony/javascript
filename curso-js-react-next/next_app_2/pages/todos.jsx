//https://jsonplaceholder.typicode.com/todos

export async function getStaticProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })
    const todos = await data.json()

    return {
        props: { todos },
    }
    
}

export default function Todos({ todos }) {

    return (
        <>
            <h1>Tarefas para fazer:</h1>
            
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.id} - {todo.title}</li>
                ))}
            </ul>
            
        </>
  )
}
//;çkjh.kmnh,j
