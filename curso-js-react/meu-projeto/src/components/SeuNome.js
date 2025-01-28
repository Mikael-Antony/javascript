function SeuNome({ SetNome }) {

    
    return (
        <div>
            <label>Nome: </label>
            <input type="text" placeholder="Qual o seu  nome" onChange={(e) => SetNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome