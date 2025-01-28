function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            <ol>{itens.length > 0 ? (
                itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))) : (
                <>Não há itens na lista</>
            )}</ol>
            
        </>
    )
}

export default OutraLista  