document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let addTask = document.querySelector("#create-task-form");
  console.log(addTask);
  addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit(e.target.new_task.value);
  });
});
function onSubmit(todo) {
  let p = document.createElement("p");
  console.log(p);
  p.textContent = `${todo}`;
  let btn = document.createElement("button");
  btn.textContent = "Delete Task";
  btn.addEventListener("click", deleteTasks);
  p.appendChild(btn);
  console.log(btn);
  document.querySelector("#tasks").appendChild(p);
}

function deleteTasks(e) {
  e.target.parentNode.remove();
}
