import { createTodo, loadTodos } from "./todos";
import renderTodos from "./views";
import { setFilters } from "./filters";

// Render initial todos
renderTodos();

// Set up search text handler
document.getElementById("searchTodo").addEventListener("input", function (event){
  setFilters({
    searchFilter : event.target.value
  });
  renderTodos();
});

// Set up checkbox handler
document.getElementById("hide-completed").addEventListener("click", (event) => {
  setFilters({
    hideCompleted : event.target.checked
  });
  renderTodos();
});

// Set up form submission handler
document.querySelector(`button[type="button"]`).addEventListener("click", function(event){
  let inputEl = document.getElementById("addTodo");
  let value = inputEl.value;
  value = value.trim();
  if(value !== ""){
    createTodo(value);
    renderTodos();
    inputEl.value = "";
  }

});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (event) => {
  if(event.key === "todos"){
    loadTodos();
    renderTodos();
  }
});