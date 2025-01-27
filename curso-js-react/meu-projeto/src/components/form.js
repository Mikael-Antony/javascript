import { useState } from 'react'

function Form() {
    function CadastraUsuario(e) {
        e.preventDefault()
        alert(`Usuario ${name} foi cadastrado com a senha ${password}`)
        
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState()
    
    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastraUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input id="name" name="name" type="text" placeholder="Digite o se nome" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Senha: </label>
                    <input id="password" name="password" type="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastra" />
                </div>
            </form>
        </>
    )
}

export default Form