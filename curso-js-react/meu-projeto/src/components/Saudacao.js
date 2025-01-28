function Saudacao({ Nome }) {

    function GerarSaudacao(AlgunNome) {
        return `Olá, ${AlgunNome}`
    }
    
    return (
        <>
            {Nome && <p>{GerarSaudacao(Nome)}</p>}
        </>
    )
}

export default Saudacao