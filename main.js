import ButtonComplete from './components/completeTask.js'
import ButtonDelete from './components/deleteTask.js'

const creatTask = (event) => {
    event.preventDefault() //impede que a pagina recarregue ao clicar no botão
    const list = document.querySelector("[data-list]")
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${value}</p>`

    task.innerHTML = content

    task.appendChild(ButtonComplete())
    task.appendChild(ButtonDelete())
    list.appendChild(task) //toda vez que clicar no botão ele vai criar uma nova lista filho
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', creatTask) //ao clicar ele vai executar a função creatTask