//very trash code,did not have enough time
let rootNode = document.getElementById('root');
let customId = 0;
const maxTaskCounts = 10
let warningMessage = false;

function CreateCounter() {
  let count = 0;
  CreateCounter.prototype.inc = function () {
    count++;
  };
  CreateCounter.prototype.dec = function () {
    count--;
  };
  CreateCounter.prototype.getValue = function () {
    return count
  };
}
let counter = new CreateCounter();

function isEmpty(id) {
  let currElem = document.getElementById(id);
  if (currElem.value === '') {
    document.getElementById('add_task').setAttribute('disabled', 'disabled');
  } else {
    document.getElementById('add_task').removeAttribute('disabled');
  }
}



function newTask() {

  if (counter.getValue() === maxTaskCounts) {
    if (!warningMessage) {
      warningMessage = true;
      let referNode = rootNode.firstChild.nextSibling;
      let message = document.createElement('p');
      message.innerHTML = 'Max tasks is 10,delete some to add new one';
      referNode.parentNode.insertBefore(message, referNode.nextSibling);

    }
  } else {
    let UniqueIdNumber = customId++;
    let div = document.createElement('div');
    div.setAttribute('id', `task-${UniqueIdNumber} `);
    div.setAttribute('draggable', true)
    div.setAttribute('class', `task-element`);
    rootNode.appendChild(div);
    let checkbox = document.createElement('button');
    checkbox.setAttribute('id', `checkbox-${UniqueIdNumber}`);
    checkbox.setAttribute('class', `checkboxBtn}`);
    checkbox.setAttribute('onclick', 'checked(this.id)')
    checkbox.innerHTML = '<i class="material-icons checkbox-button">check_box_outline_blank</i>';
    div.appendChild(checkbox);
    let p = document.createElement('p');
    p.setAttribute('class', 'task-name')
    p.textContent = document.getElementById('add-action').value;
    div.appendChild(p); let editBtn = document.createElement('button');
    editBtn.setAttribute('id', `editBtn-${UniqueIdNumber}`);
    editBtn.setAttribute('class', `editBtn()`);
    editBtn.setAttribute('onclick', 'editTask(this.id)');
    editBtn.innerHTML = '<i class="material-icons edit-button">create</i>';
    div.appendChild(editBtn);
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', `remove-${UniqueIdNumber}`);
    removeBtn.setAttribute('class', `removeBtn`);
    removeBtn.setAttribute('onclick', 'removeTask(this.id)');
    removeBtn.innerHTML = '<i class="material-icons remove-button">delete</i>';
    div.appendChild(removeBtn);
    counter.inc();
    warningMessage = false;
  }
}


function removeTask(clicked_id) {
  const removeCharactersToGetId = 7;
  let currentElem = document.getElementById(clicked_id);
  let parElem = currentElem.parentNode;
  let id = clicked_id.slice(removeCharactersToGetId);
  let editElem = document.getElementById(`editDiv-${id}`);
  if (editElem) {
    editElem.remove();
  }
  parElem.parentNode.removeChild(parElem);
  counter.dec();
}

function editTask(clicked_id) {
  const removeCharactersToGetId = 8;
  let id = clicked_id.slice(removeCharactersToGetId);
  let currentElem = document.getElementById(clicked_id);
  let parElem = currentElem.parentNode;
  let div = document.createElement('div');
  div.setAttribute('id', `editDiv-${id}`);
  console.log(`editDiv-${id} `);
  div.setAttribute('class', `task-element`);
  parElem.parentNode.insertBefore(div, parElem.nextSibling);
  let renameElem = document.createElement('input');
  renameElem.setAttribute('type', 'text');
  renameElem.setAttribute('class', 'edit-input');
  renameElem.setAttribute('id', `rename-${id} `);
  div.appendChild(renameElem);
  let confirmChanges = document.createElement('button');
  confirmChanges.setAttribute('class', `confirm-changes`);
  confirmChanges.setAttribute('id', `confirm-${id}`);
  confirmChanges.setAttribute('onclick', 'confirmChanges(this.id)');
  confirmChanges.innerHTML = '<i class="material-icons confirm-changes">save</i>';
  div.appendChild(confirmChanges);
}

function confirmChanges(clicked_id) {
  let currentElem = document.getElementById(clicked_id);
  let newValue = currentElem.previousSibling.value;
  let currentDiv = currentElem.parentNode;
  console.log(newValue);
  currentDiv.previousSibling.childNodes[1].innerHTML = newValue;
  currentDiv.parentNode.removeChild(currentDiv);
}

function checked(clicked_id) {
  let currentElem = document.getElementById(clicked_id);
  currentElem.innerHTML = '<i class="material-icons checkbox-button">check_box</i>';
  currentElem.removeAttribute('onclick')
  currentElem.setAttribute('disabled', 'disabled');
}

