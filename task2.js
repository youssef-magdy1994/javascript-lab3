const taskInput = document.getElementById("taskIdInput");
const oneTaskBtn = document.getElementById("oneTaskBtn");
const allTasksBtn = document.getElementById("allTasksBtn");

const getTaskById = function () {
  document.getElementById("");
  let taskId = +taskInput.value;
  if (taskId >= 1 && taskId <= 200) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/" + taskId);
    xhr.send("");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let tsk = JSON.parse(xhr.response);
        document.getElementById("tasksTable").innerHTML = `
            <td>${tsk["id"]}</td>
            <td>${tsk["title"]}</td>
            <td>${tsk["completed"]}</td>
        `;
      }
    };
    taskInput.value = "";
  } else {
    alert("ID must be between 1 and 200.");
    taskInput.value = "";
  }
};
const getAllTasks = function () {
  document.getElementById("tasksTable").innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send("");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.response);
      response.forEach((tsk) => {
        let taskRow = document.createElement("tr");
        taskRow.innerHTML = `
          <td>${tsk["id"]}</td>
          <td>${tsk["title"]}</td>
          <td>${tsk["completed"]}</td>
      `;
        document.getElementById("tasksTable").appendChild(taskRow);
      });
    }
  };
  taskInput.value = "";
};

oneTaskBtn.addEventListener("click", getTaskById);
allTasksBtn.addEventListener("click", getAllTasks);
