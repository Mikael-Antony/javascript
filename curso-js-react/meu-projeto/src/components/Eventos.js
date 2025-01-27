import Button from './evento/button.js';
function Evento() {

    function meuEvento() {
        alert(`Primeiro Evento!`);
    }

    function segundoEvento() {
        alert('Segundo Evento!');
    }
    
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            
        </div>
    )
}

export default Evento