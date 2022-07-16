import { clearList, clearAll } from './func.js';

const myList = document.querySelector('.todo-list');
const todoBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const clearBtn = document.querySelector('.clear-btn');

let taskList = [];

const display = () => {
  myList.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((task) => {
    const myList = document.querySelector('.todo-list');
    const flag = task.completed ? 'checked' : '';
    const lists = document.createElement('li');
    lists.classList.add('todo-li');
    lists.innerHTML = `
      <div class="description">
        <input type="checkbox" ${flag} class="checkbox" data-set="${task.index}"/>
        <input class="todo-description" type="text"  value="${task.description}">
      </div>
      <div class="ellipses-icon">
        <i class="fa-solid fa-trash-can cursor" id="${task.index}"></i>
      </div>
    `;
    myList.appendChild(lists);
    const taskInput = lists.children[1];
    taskInput.addEventListener('change', () => {
      const taskListChores = document.querySelector('.todo-li');
      const array = Array.from(taskListChores.children);
      const index = array.indexOf(lists);
      const taskListLocal = JSON.parse(localStorage.getItem('localItem'));
      taskListLocal[index].description = taskInput.value;
      localStorage.setItem('localItem', JSON.stringify(taskListLocal));
    });
  });
};

display();

todoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (todoInput.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  const obj = {
    description: todoInput.value,
    completed: false,
    index: taskList.length,
  };

  taskList.push(obj);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  todoInput.value = '';
  display();
});

const removeTask = (index) => {
  const newArr = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...newArr);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};
myList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

myList.addEventListener('click', clearList);

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearAll();
  display();
});
