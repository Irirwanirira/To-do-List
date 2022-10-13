import {
  clearCompleted, formSubmission, editTodoList, populateTasks,

} from './module/addRemove.js';
import './style.css';

const clearCompletedButton = document.getElementById('clear-completed');

clearCompletedButton.addEventListener('click', clearCompleted);

formSubmission();
editTodoList();
populateTasks();
