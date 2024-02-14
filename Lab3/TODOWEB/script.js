const inputBox = document.getElementById("input-box")
const list = document.getElementById("list-container")


function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.onclick = () => removeTask(li);

 
  li.appendChild(removeButton);

  return li;
}


function removeTask(taskElement) {
  const tasksList = document.getElementById("list-container");
  tasksList.removeChild(taskElement);
}

function addTask() {
  const task = inputBox.value.trim();
  if (task) {
    const newTaskElement = createTaskElement(task);
    list.appendChild(newTaskElement);
    inputBox.value = "";
  }
}

inputBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
})