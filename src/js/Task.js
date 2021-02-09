export class Task {
    constructor() {
    }

    createElem() {

        //Search elems
        const task = document.querySelector('.task')
        const progressBar = document.querySelector('.section__bot_progressBar');
        const progressText = document.querySelector('.section__bot_progressBar-text')
        const inputTask = document.querySelector('.section__top_input');
        const submitBtn = document.querySelector('.deleteform__submit');
        const removik = document.querySelector('#removik');
        
        
        //Create elems
        const elem = document.createElement('li');
        const check = document.createElement('input');
        check.type ="checkbox"
        const text = document.createElement('p');
        const correctBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const textarea = document.createElement('textarea');
        const corrBtn = document.createElement('button');
        
        //Give classes
        elem.className = 'task__element';
        check.className = 'task__check';
        text.className = 'task__text';
        correctBtn.className = 'task__correct';
        deleteBtn.className = 'task__delete';
        textarea.className = 'task__textarea';
        corrBtn.className = 'task__ok';

        task.appendChild(elem);
        elem.appendChild(check);
        elem.appendChild(text);
        elem.appendChild(correctBtn);
        elem.appendChild(deleteBtn);

        text.textContent = inputTask.value;

        const letProgress = () => {
            const allCheckBox = document.querySelectorAll('.task__check')
            let arrCheckBox = Array.prototype.slice.call(allCheckBox)
            const arrLength = arrCheckBox.length;
            const arrFilter = arrCheckBox.filter(i => i.checked).length 
            progressBar.style.width = arrFilter / arrLength * 100 + '%';
            progressText.innerHTML =  arrFilter  + ' ' + "of" + ' ' + arrLength + ' ' + "tasks done"
        }

        letProgress() 

        //Click check
        check.addEventListener('click', () => {
            if(check.checked) {
                text.classList.add('task__text_active');
                letProgress();
                enableRemover()
            }   
            else { 
                text.classList.remove('task__text_active');
                letProgress();
                enableRemover()
            }
        })   

        //Confirm delete
        submitBtn.addEventListener('click', () => {
            if(check.checked) {
                elem.remove();
                letProgress();
                enableRemover()
                progressBar.style.width = 0;
            }
         })

         //Delete checked string
         deleteBtn.addEventListener('click', () => {
             task.removeChild(elem);
             letProgress();
             enableRemover()
         })

         //Edit string
         correctBtn.addEventListener('click', () => {
            elem.appendChild(textarea);
            correctBtn.replaceWith(corrBtn);
            textarea.value = text.innerText;
            text.replaceWith(textarea);
         })

         //Подтверждение редактирования
         corrBtn.addEventListener('click', () => {
            textarea.replaceWith(text);
            text.innerText = textarea.value;
            corrBtn.replaceWith(correctBtn);
         })            

         const enableRemover = () => {
            const allCheckBox = document.querySelectorAll('.task__check')
            let arrCheckBox = Array.prototype.slice.call(allCheckBox)
            const arrFilter = arrCheckBox.filter(i => i.checked).length 
             if(arrFilter === 0) {
                removik.setAttribute('disabled', 'disabled');
             } else {
                removik.removeAttribute('disabled', 'disabled');
             }
         }
         enableRemover(); 
    }
    
    setEventListeners() {
        const addElem = document.querySelector('.section__top_add');
        const inputTask = document.querySelector('.section__top_input');
        removik.setAttribute('disabled', 'disabled');
        addElem.addEventListener('click', () => {
            this.createElem();
            document.getElementById("inputText").value = "";
            });
        inputTask.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 ) {
                this.createElem();
                document.getElementById("inputText").value = "";
            }
        })
    }       
}
