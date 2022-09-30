/* eslint-disable */
import './style.css'


const listsContainer = document.querySelector('.task-list');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const Local_storage_list_key = 'task.lists';

let lists = JSON.parse(localStorage.getItem(Local_storage_list_key)) ||[];

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);

  saveAndRender();
});

function createList(activity) {
  return { id: Date.now().toString(), activity: activity, performance: false };
}
function save() {
  localStorage.setItem(Local_storage_list_key, JSON.stringify(lists));
}

function saveAndRender() {
  save();
  render();
}





// let lists = [
//   {
//   activity: 'swimming',
//   completed: false,
//   id: 0,
// },

// {
//   activity: 'studying',
//   completed: false,
//   id: 0,
// },

// ]

function render(){
  
 clearElement(listsContainer);

  const myDynamicTask = lists.map((list) => `

    <li class="list-name">
        <div class="input_label">
            <input type="checkbox" value>  
            <label for="list">${list.activity}</label>
        </div>
      
        <i class="fa-solid fa-ellipsis-vertical" id = 'trippleDots'></i>

    </li>

  `)
  // console.log(myDynamicTask) 
  // console.log(clearElement)

  listsContainer.innerHTML = myDynamicTask.join(''); 

}

function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}

render()


