document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.getElementById('create-task-form');
let tasks = document.getElementById("tasks");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let taskInput = document.getElementById('new-task-description');
  
let addTask = function () {
  let text = taskInput.value;
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.innerHTML = text;
  deleteButton.innerHTML = "DELETE";
  deleteButton.onclick = function() {
    var parent = this.parentNode.parentNode; /*this will set the display div as the parent with respect to the button.*/
    var child = this.parentNode;/*the li element will now beassigned to the variable child*/
    parent.removeChild(child); /*rWe use this method to delete the selected li element from the DOM*/
  }  
  li.appendChild(deleteButton);
  tasks.appendChild(li);
}
addTask();
taskInput.value = ' ';
})
})