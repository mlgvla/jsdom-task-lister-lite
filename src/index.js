document.addEventListener("DOMContentLoaded", () => {
  let createTaskForm = document.getElementById("create-task-form")
  createTaskForm.addEventListener("submit", createNewTask)
});

function createNewTask(e) {
    e.preventDefault()
    let newTaskInput = document.getElementById("new-task-description")
    let newTaskLi = document.createElement("li")
    newTaskLi.innerHTML = newTaskInput.value

    let tasksUl = document.getElementById("tasks")
    tasksUl.appendChild(newTaskLi)
    e.target.reset()

}
