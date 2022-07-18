Todo-interactive
import { clearTask, clearAllTask } from './func.js';
const dailyTaskList = document.querySelector('.todo-app-list');
const todoBtnApp = document.querySelector('.todo-app-btn');
const todoInputApp = document.querySelector('.todo-app-input');
const clearBtnList = document.querySelector('.clear-list-btn');

let taskDailyList = [];

const display = () => {
 Todo-interactive
  dailyTaskList.innerHTML = '';
  taskDailyList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskDailyList.forEach((task) => {
    const dailyTaskList = document.querySelector('.todo-app-list');

    const flag = task.completed ? 'checked' : '';
    const lists = document.createElement('li');
    lists.classList.add('todo-li');
    lists.innerHTML = `
      <div class="description">
        <input type="checkbox" ${flag} class="checkbox" data-set="${task.index}"/>
Todo-interactive
        <input class="todo-desc" type="text"  value="${task.description}">
      </div>
      <div class="ellipses-icon">
        <i class="fa-solid fa-trash-can cursor" id="${task.index}"></i>
      </div>
    `;
    dailyTaskList.appendChild(lists);
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

todoBtnApp.addEventListener('click', (e) => {
  e.preventDefault();
  if (todoInputApp.value === '') return;
  taskDailyList = JSON.parse(localStorage.getItem('localItem')) || [];
  const obj = {
    description: todoInputApp.value,
    completed: false,
    index: taskDailyList.length,
  };

  taskDailyList.push(obj);
  localStorage.setItem('localItem', JSON.stringify(taskDailyList));
  todoInputApp.value = '';
  display();
});

const removeTask = (index) => {
  const newArr = taskDailyList.filter((element) => element.index !== index);
  taskDailyList.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskDailyList.push(...newArr);
  localStorage.setItem('localItem', JSON.stringify(taskDailyList));
  display();
};
dailyTaskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

Todo-interactive
dailyTaskList.addEventListener('click', clearTask);

clearBtnList.addEventListener('click', (e) => {
  e.preventDefault();
  clearAllTask();
  display();
});

