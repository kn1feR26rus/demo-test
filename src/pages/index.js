import { Popup } from '../js/Popup.js';
import { Task } from '../js/Task.js';

const modal = document.querySelector('.modal');
const task = document.getElementById('#task');

//const buttons
const addElem = document.querySelector('.section__top_add');
const closeBtn = document.querySelector('.deleteform__close-button');
const cancelBtn = document.querySelector('.deleteform__cancel');
const submitBtn = document.querySelector('.deleteform__submit');
const deleteBtn = document.querySelector('.section__bot_remover');

//open modal-confirm to delete checked
deleteBtn.addEventListener('click', () => {
    newModal.open();
});

const newTask = new Task(addElem);
newTask.setEventListeners();

const newModal = new Popup(modal, closeBtn, cancelBtn, submitBtn);
newModal.setEventListeners();





























/*
deleteBtn.addEventListener('click', () => {
    modal.classList.add('modal_opened')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_opened')
})

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('modal_opened')
})



function newTask() {
    
    let title = inputTask.value;
    const correct = document.getElementById('#correct');
    const del = document.getElementById('#delete');


}
*/
