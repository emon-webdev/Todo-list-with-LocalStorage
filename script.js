function getElement(id) {
    const inputField = document.getElementById(id);
    return inputField;
}

function handleSubmit() {
    //get item from local storage and convert pase
    const toDos = JSON.parse(localStorage.getItem('To-Dos'));
    //input field catch
    const inputField = getElement('todo-text');
    const inputValue = inputField.value;

    // if else use because 
    if (!toDos) {
        //
        const todoList = [{ title: inputValue, completed: false }];
        //convert stringify
        const todoListStringify = JSON.stringify(todoList);
        //set value in local Storage
        localStorage.setItem('To-Dos', todoListStringify)
    } else {
        const todoList = [...toDos, { title: inputValue, completed: false }];
        //convert stringify
        const todoListStringify = JSON.stringify(todoList);
        //set value in local Storage
        localStorage.setItem('To-Dos', todoListStringify)
    }

    // simple show ui without localStorage
    // const ul = document.getElementById('todo-list');
    // const li = document.createElement('li')
    // li.classList.add('py-2')
    // li.innerText = inputValue
    // ul.appendChild(li)
    inputField.value = ''
    // console.log('submit plus', inputValue)
    // button click and call render() function
    render()
}



const render = () => {
    //get item from local storage and convert parse import because forEach use and show ui
    const toDos = JSON.parse(localStorage.getItem('To-Dos'));
    // catch ul container
    const ul = document.getElementById('todo-list');
    // 
    ul.textContent = ''
    toDos?.forEach(todo => {
        const li = document.createElement('li')
        li.classList.add('py-2')
        li.innerText = todo.title
        ul.appendChild(li)
    })
};

render()

const handleClearAll = () => {
    localStorage.removeItem('To-Dos')
    render()
};






