export const searchBar = () => {
    const root = document.getElementById('root')
    const divEl = document.createElement('div')
    divEl.id = 'form-container'
    const formEl = document.createElement('form')
    const btnRandom = document.createElement('button')
    btnRandom.innerHTML = '<i class="fa-solid fa-shuffle"></i>'
    btnRandom.id = 'btn-random'
    const inputEl = document.createElement('input')
    inputEl.type = 'text'
    inputEl.id = 'input'
    inputEl.placeholder = "Search.."
    const btnSearch = document.createElement('button')
    btnSearch.innerHTML = '<i class="fa fa-search"></i>'
    btnSearch.id = 'btn-search'

    formEl.appendChild(inputEl)
    formEl.appendChild(btnSearch)
    divEl.appendChild(formEl)
    divEl.appendChild(btnRandom)

    root.appendChild(divEl)
}