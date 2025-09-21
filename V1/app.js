var tasks = [];

// No Task Available
window.onload = function () {
  NoTasksMessage();
};

function NoTasksMessage() {
  var message = document.getElementById("no-tasks-message");
  if (tasks.length === 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

function addTask() {


  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var dueDate = document.getElementById("due-date").value;
  var status = document.getElementById("status").value;

  if (window.editingTaskId) {
    // Update existing task
    let task = tasks.find(t => t.id === window.editingTaskId);
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.status = status;
    task.editedDate = new Date().toISOString().split("T")[0];

    alert("Task Updated Successfully!");
   
  } else {
    // Add new task
    var task = {
      id: tasks.length + 1,
      title: title,
      description: description,
      postedDate: new Date().toISOString().split("T")[0],
      dueDate: dueDate,
      status: status

    };
    tasks.push(task);
     alert("Task Added Successfully!");
  }
   
 
  renderTasks();
 
}


 
 
 function renderTasks() {
  var tasksBody = document.getElementById("tasks-body");
  tasksBody.innerHTML = ""; // Clear previous rows

  tasks.forEach(task => {
    var row = document.createElement("tr");

    var TaskPostedDate = task.editedDate 
                 ? task.postedDate + "<br><small>Edited: " + task.editedDate + "</small>" 
                 : task.postedDate;


    row.innerHTML =
      "<td>" + task.id + "</td>" +
      "<td>" + task.title + "</td>" +
      "<td>" + task.description + "</td>" +
      "<td>" + TaskPostedDate + "</td>" +
      "<td>" + task.dueDate + "</td>" +
      "<td>" + task.status + "</td>";

    // Actions
    var actionEdit = document.createElement("td");
    actionEdit.innerHTML =
      `<button id="edit-button-${task.id}" onclick="editTask(${task.id})">Edit</button>`;

    var actionUpdateStatus = document.createElement("td");
    actionUpdateStatus.innerHTML =
      `<button id="update-status-button-${task.id}" onclick="UpdateTaskStatus(${task.id})">Update Status</button>`;

    var actionCell = document.createElement("td");
    actionCell.innerHTML = `
      <div class="action-buttons">
        ${actionEdit.innerHTML}
        ${actionUpdateStatus.innerHTML}
      </div>
    `;

    row.appendChild(actionCell);
    tasksBody.appendChild(row);
  });

  NoTasksMessage();
}
  
  

// Function to update task status
function UpdateTaskStatus(id) {
  let currentStatus = tasks.find(task => task.id === id).status;
 


}

//Function to edit task
function editTask(id) {
  var task = tasks.find(task => task.id === id);
  // Populate form fields with task data  
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("due-date").value = task.dueDate;

  if(task.status === "Pending"){
    document.getElementById("status").innerHTML = `
    <option value="Pending" selected >Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
    `;
  }else if(task.status === "In Progress"){
    document.getElementById("status").innerHTML = `
    <option value="In Progress" selected >In Progress</option>
    <option value="Pending" >Completed</option>
  `;}
  document.getElementById("status").value = task.status;
  // Change Add button to Update button
  var addButton = document.getElementById("add-button");
  addButton.textContent = "Update Task";

  window.editingTaskId = id; // Store the task ID globally for updatin

}


// Clear form fields
document.getElementById("reset-button").addEventListener("click", function () {
  document.getElementById("todo-form").reset();
  window.editingTaskId = null;
  document.getElementById("add-button").textContent = "Add Task";
});
