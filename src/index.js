document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.getElementById('create-task-form');
let tasks = document.getElementById("tasks");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var taskInput = document.getElementById('new-task-description');
  
var addTask = function () {
  var text = taskInput.value;
  var li = document.createElement('li');
  li.innerHTML = text;
  tasks.appendChild(li);
}
addTask();
taskInput.value = ' ';
})
})