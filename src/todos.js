import uuidv4 from "uuid/v4";

// Setup the empty todos array
let todos = [];
const key = "todos";

loadTodos();

// loadTodos
// Arguments: none
// Return value: all todos
function loadTodos(){
  let todoJSON = localStorage.getItem(key);
  try{
    todos = todoJSON ? JSON.parse(todoJSON) : [];
  }catch(error){
    todos = [];
  }
}

// saveTodos
// Arguments: none
// Return value: none
function saveTodos(){
  localStorage.setItem(key, JSON.stringify(todos));
}

// getTodos
// Arguments: none
// Return value: todos array
function getTodos(){
  return todos;
}

// createTodo
// Arguments: todo text
// Return value: none
function createTodo(todoText){
  todos.push({
    title : todoText,
    completed : false,
    todoID : uuidv4()
  });
  saveTodos();
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
function removeTodo(todoID){
  let todoIndex = todos.findIndex(eachTodo => eachTodo.todoID === todoID);
  if(todoIndex !== -1){
    todos.splice(todoIndex, 1);
    saveTodos();
  }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
function toggleTodo(todoID){
  let thatTodo = todos.find(eachTodo => eachTodo.todoID === todoID);
  if(todo){
    thatTodo.completed ? thatTodo.completed = false : thatTodo.completed = true;
    saveTodos();
  }
}

// Make sure to call loadTodos and setup the exports

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos };