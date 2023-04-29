import {isEscapeKey} from './utils.js';

const searchLinkElement = document.querySelector('.search-link');
const modalWindow = document.querySelector('.modal-container');
const cancelButton = modalWindow.querySelector('.modal-close-button');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

const onCloseButtonClick = () => {
  closeModalWindow();
};

function closeModalWindow () {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCloseButtonClick);
}

const openModalWindow = () => {
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButton.addEventListener('click', onCloseButtonClick);
};

const openModal = () => searchLinkElement.addEventListener('click', openModalWindow);

export {openModal};