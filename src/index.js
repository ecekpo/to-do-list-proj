// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const myList = document.querySelector('.todo-list');

const todoList = [
  {
    description: 'Wash the clothes',
    completed: true,
    index: 1,
  },

  {
    description: 'Complete the To Do list task',
    completed: false,
    index: 2,
  },

  {
    description: 'Shop for food items',
    completed: true,
    index: 3,
  },
];

todoList.forEach((element) => {
  const lists = document.createElement('li');
  lists.classList.add('todo-li');
  lists.innerHTML = `
    <div class="description">
      <input type="checkbox" />
      <p class="todo-description">${element.description}</p>
    </div>
    <div class="ellipses-icon">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  `;
  myList.appendChild(lists);
});
