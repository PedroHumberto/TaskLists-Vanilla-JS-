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

export default ButtonDelete