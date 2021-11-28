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

export default ButtonComplete