( () =>{ //função para tirar do escopo global removendo o acesso as funções
        const creatTask = (event) =>{
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

        const ButtonComplete = () =>{
            const buttonComplete = document.createElement('button')
            buttonComplete.classList.add('check-button')
            buttonComplete.innerText = 'Check'

            buttonComplete.addEventListener('click', completedTask)

            return buttonComplete

        }

        const completedTask = (event) =>{
            const buttonComplete = event.target //descorbir elemento clicado
            
            const taskCompleted = buttonComplete.parentElement //pega o pai do elemento

            taskCompleted.classList.toggle('done') //executa classe CSS
        }

        const ButtonDelete = (event) =>{
            const buttonDelete = document.createElement('button')
            buttonDelete.classList.add('delete-button')
            buttonDelete.innerText = 'Delete'
            buttonDelete.addEventListener('click', deleteTask)
            return buttonDelete
        }

        const deleteTask = (event) =>{
            const buttonDelete = event.target
            const taskDelete = buttonDelete.parentElement
            taskDelete.remove()

        }
    }
)()