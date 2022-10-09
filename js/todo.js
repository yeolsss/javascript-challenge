const todoInput = document.querySelector('#todo-form__input');
const todoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';
let toDos = [];

function handleLocalToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handlePrintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(delBtn);
  delBtn.innerText = '❌';
  delBtn.addEventListener('click', handleDelToDo);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleDelToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  handleLocalToDos();
}

function handleCreateTodo(info) {
  info.preventDefault();

  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoInput.value = '';
  toDos.push(newTodoObj);
  handlePrintToDo(newTodoObj);
  handleLocalToDos();
}

todoForm.addEventListener('submit', handleCreateTodo);

const localTodos = localStorage.getItem(TODOS_KEY);

if (localTodos !== null) {
  const parsedToDos = JSON.parse(localTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(handlePrintToDo);
}
