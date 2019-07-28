location.hash = 'main_page';
let returnObj = JSON.parse(localStorage.getItem('toDo'));
let returnId = JSON.parse(localStorage.getItem('id'));
let todoItems = [];
if (returnObj !== null) {
    todoItems = returnObj;
}
let id = 0;
if (returnId !== null) {
    id = returnId;
}
createTasks();
let modifyNumber;

window.addEventListener('hashchange', function () {
    let currentHash = window.location.hash.substring(1);
    switch (currentHash) {
        case 'add-task_page':
            document.getElementById('main_page').style.display = 'none';
            document.getElementById('add-task_page').style.display = 'block';
            document.getElementById('modify-item').style.display = 'none';
            break;
        case 'modify-item':
            document.getElementById('main_page').style.display = 'none';
            document.getElementById('add-task_page').style.display = 'none';
            document.getElementById('modify-item').style.display = 'block';
            break
        default:
            document.getElementById('main_page').style.display = 'block';
            document.getElementById('add-task_page').style.display = 'none';
            document.getElementById('modify-item').style.display = 'none';
    }
})

document.getElementById('newTask-btn').addEventListener('click', changeHashOnAddTask);

document.getElementById('confirmName-btn').addEventListener('click', addTask);




document.getElementById('cancelTaskName-btn').addEventListener('click', function () {
    location.hash = '#main_page';
})

function isEmptyInput(ele, nameOfDisabledId) {
    let currElem = document.getElementById(ele.id);
    if (currElem.value === '') {
        document.getElementById(nameOfDisabledId).setAttribute('disabled', 'disabled');
    } else {
        document.getElementById(nameOfDisabledId).removeAttribute('disabled');
    }
}

function addTask() {
    let duplicate = false;
    let description = document.getElementById('taskName-input').value;
    if (todoItems !== null) {
        for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].description === description) {
                duplicate = true;
            }
        }
    }
    if (duplicate) {
        customAlert(`Error! You can't add already exist item`);
    } else {
        let newTask = { isDone: false, id: id++, description: description };
        todoItems.push(newTask);
        createTasks();
        location.hash = '#main_page';
    }
}

function changeHashOnMain() {
    location.hash = '#main_page';
}

function changeHashOnAddTask() {
    location.hash = '#add-task_page';
}

function changeHashOnModify(ID) {
    const getPureId = 2;
    id = ID.slice(getPureId);
    modifyNumber = id;

    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === parseInt(id)) {
            if (!todoItems[i].isDone) {
                document.getElementById('modify-input').value = todoItems[i].description;
                location.hash = '#modify-item';
            } else {
                customAlert('you already do this task')
            }
        }
    }
}

function createTasks() {
    filterTasks()
    const mainPage = document.getElementById('task-list');
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    if (todoItems !== null) {
        for (let i = 0; i < todoItems.length; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', `div-${todoItems[i].id}`);
            div.setAttribute('class', `toDoItems`);
            mainPage.appendChild(div);
            let img1 = document.createElement('img');
            img1.setAttribute('class', `isdone`);
            img1.setAttribute('id', `isdone-${todoItems[i].id}`);
            img1.setAttribute('onclick', 'changeMark(this.id)');
            if (todoItems[i].isDone) {
                img1.setAttribute('src', './assets/img/done-s.png')
            } else {
                img1.setAttribute('src', './assets/img/todo-s.png')
            }
            div.appendChild(img1);
            let p = document.createElement('p');
            p.setAttribute('id', `p-${todoItems[i].id}`);
            p.textContent = todoItems[i].description;
            if (todoItems[i].isDone) {
                p.style.background = 'grey';
            }
            p.setAttribute('onclick', 'changeHashOnModify(this.id)');
            div.appendChild(p);
            let img2 = document.createElement('img');
            img2.setAttribute('class', 'deleteElement');
            img2.setAttribute('id', `deleteElement-${todoItems[i].id}`);
            img2.setAttribute('src', './assets/img/remove-s.jpg');
            img2.setAttribute('onclick', 'deleteItem(this.id)');
            div.appendChild(img2);
            id++
        }
    }
    let serialObj = JSON.stringify(todoItems);
    let idObj = JSON.stringify(id)
    localStorage.setItem('toDo', serialObj);
    localStorage.setItem('id', idObj);
}


function changeMark(id) {
    const getPureId = 7;
    id = id.slice(getPureId);
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === parseInt(id)) {
            todoItems[i].isDone = !todoItems[i].isDone;
        }
    }
    createTasks()
}

function modify() {
    let isExist = false
    let newValue = document.getElementById('modify-input').value;
    if (!newValue) {
        customAlert(`Line is empty`);
    } else {
        for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].description === newValue) {
                customAlert(`Element with such name already exists`);
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            for (let i = 0; i < todoItems.length; i++) {
                if (todoItems[i].id === parseInt(modifyNumber)) {
                    todoItems[i].description = newValue;
                }
            }
            createTasks();
            location.hash = '#main_page';
        }
    }
}

document.getElementById('modify-btn').addEventListener('click', modify);
document.getElementById('cancelModify-btn').addEventListener('click', function () {
    location.hash = '#main_page';
});

function deleteItem(ID) {
    const getPureId = 14;
    let id = ID.slice(getPureId);

    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === parseInt(id)) {
            todoItems.splice(i, 1);
        }
    }
    let curr = document.getElementById(ID);
    curr.parentNode.parentNode.removeChild(curr.parentNode);
    createTasks()
}

function customAlert(text) {
    const notExist = -1;
    const timer = 2000;
    document.getElementById('messageError').innerText = text;
    let elem = document.getElementById('message');
    elem.style.display = 'block';

    if (navigator.userAgent.indexOf('Chrome') !== notExist) {
        elem.style.left = '10px'
    } else {
        elem.style.right = '10px'
    }

    setTimeout(function () {
        elem.style.display = 'none';
    }, timer)
}

function filterTasks() {
    todoItems = todoItems.sort((a, b) => a.isDone - b.isDone);
}