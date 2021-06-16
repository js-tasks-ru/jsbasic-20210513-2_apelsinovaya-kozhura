import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.open();
    this.makeModal();
    this.buttonClose();
    this.closeWithEscape();
  }

  makeModal() {
    this.elem.innerHTML = `<div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>
        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    `;
  }

  open() {
    let body = document.body;
    body.append(this.elem);
    body.classList.add('is-modal-open');
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(node) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.append(node);
  }

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
  }

  buttonClose() {
    let button = document.querySelector('.modal__close');

    button.onclick = () => {
      this.close();
    };
  }

  closeWithEscape() {
    document.onkeydown = (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    };
  }
}
