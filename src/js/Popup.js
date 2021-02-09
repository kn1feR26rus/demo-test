export class Popup {
    constructor(modalSelector, closeButton, cancelButton, confirmeButton) {
        this.modal = modalSelector;
        this.closeButton = closeButton;
        this.cancelButton = cancelButton;
        this.confirmeButton = confirmeButton;
    }

    open() {
        if (!this.modal.classList.contains('modal_opened')) {
            this.modal.classList.add('modal_opened')
            }
    }

    close() {
        event.preventDefault();
        if (this.modal.classList.contains('modal_opened')) {
            this.modal.classList.remove('modal_opened')
            }
    }
    

    setEventListeners() {
        this.closeButton.addEventListener('click', () => {
            this.close()
        })

        this.cancelButton.addEventListener('click', () => {
            this.close()
        })

        this.confirmeButton.addEventListener('click', () => {
            this.close()    
        })
        
    }
}