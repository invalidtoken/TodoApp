import { getTodos, removeTodo, toggleTodo } from "./todos";
import { getFilters } from "./filters"

// renderTodos
// Arguments: none
// Return value: none
function renderTodos(){
  let mainDiv = document.getElementById("todo");
  const todos = getTodos();
  const filter = getFilters();
  mainDiv.innerHTML = "";

  let filterTodos = todos.filter(function(todo){
    let searchResult = todo.title.toLowerCase().includes(filter.searchFilter.toLowerCase());
    let hideResult = !filter.hideCompleted || !todo.completed;
    return searchResult && hideResult;
  });
  
  console.log("The filtered todos are :",filterTodos);

  // setup for summary element
  let incompleteTodos = filterTodos.filter(eachTodo => !eachTodo.completed);
  mainDiv.appendChild(generateSummaryDOM(incompleteTodos));

  if(filterTodos.length > 0){

    // creating and appending todoEl
    filterTodos.forEach(function(eachTodo){
      let todoEl = generateTodoDOM(eachTodo);
      mainDiv.appendChild(todoEl);
    });
  
  }else{
    let emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-message");
    emptyMessage.textContent = "No to-dos to show";
    mainDiv.appendChild(emptyMessage);
  }
  
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
function generateTodoDOM(todo){
  let todoEl = document.createElement("label");
  let containerEl = document.createElement("div");
  let checkbox = document.createElement("input");
  let span = document.createElement("span");  
  let removeButton = document.createElement("button");
  
  // Setup todo checkbox
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", function(event){
    toggleTodo(todo.todoID);
    renderTodos();
  });
  
  // Setup the todo text
  span.textContent = todo.title;
  containerEl.appendChild(span);

  // Setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);
  
  // Setting up the remove button
  removeButton.textContent = "Remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todo.todoID);
    renderTodos();
  });

  return todoEl;
}

// generateSummaryDOM
// Arguments: incompleteTodos
// Return value: the summary element
function generateSummaryDOM(incompleteTodos){
  const summary = document.createElement("h2");
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompleteTodos.length} todo${incompleteTodos.length === 1 ? "" : "s"} left`;

  return summary;
}
// Make sure to set up the exports

export { renderTodos as default };