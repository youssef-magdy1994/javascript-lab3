const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let task;
let taskId = 1000;
const completeTask = function () {
  this.parentElement.style.backgroundColor = "green";
};
const deleteTask = function () {
  this.parentElement.remove();
};
const addNewTask = function () {
  task = inputTask.value;
  taskId++;
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("id", `${taskId}`);
  taskDiv.innerHTML = `
    <span>${task}</span>
    <button id="done${taskId}">Done</button>
    <button id="delete${taskId}">Delete</button>
    `;
  taskList.appendChild(taskDiv);
  document
    .getElementById(`done${taskId}`)
    .addEventListener("click", completeTask);
  document
    .getElementById(`delete${taskId}`)
    .addEventListener("click", deleteTask);
};

addButton.addEventListener("click", addNewTask);
