const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // récupérer la valeur saisie dans le champ de saisie
  const task = taskInput.value;
  taskInput.value = "";

  // créer un nouvel élément li pour la tâche
  const taskItem = document.createElement("li");
  taskItem.innerHTML = task;

  // ajouter la tâche à la liste
  taskList.appendChild(taskItem);
});