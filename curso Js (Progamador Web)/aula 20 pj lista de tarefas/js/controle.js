let cont = 0
let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')
btnAdd.addEventListener('click', addTarefa)

function addTarefa() {
    let valorInput = input.value;

    if (valorInput !== '' && valorInput !== null && valorInput !== undefined) {
        cont++
        let novoItem = `<div id="${cont}" class="item" onclick="marcarTarefa(${cont})">
            <div class="item-icone">
                <span class="material-symbols-outlined" id="icone_${cont}">
                    error
                </span>
            </div>

            <div class="item-nome">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button  onclick="deletar(${cont})" class="delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>Delete
                </button>
            </div>
        </div>`;

        main.innerHTML += novoItem;
        input.value = ''
        input.focus()
    }

}

function marcarTarefa(id) {
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')

    if (classe=='item'){
        item.classList.add('clicado')
        document.getElementById(`icone_${id}`).innerHTML = 'check_circle'

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')
        document.getElementById(`icone_${id}`).innerHTML = 'error'
    }

}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})

function deletar(id) {
    let tarefa = document.getElementById(id)
    tarefa.remove()
}