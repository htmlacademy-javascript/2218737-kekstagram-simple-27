const bodyElement = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onErrorButtonClick = () => {
  hideMessage();
};
const onOverlayClick = () => {
  hideMessage();
};
const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  bodyElement.append(successElement);
  bodyElement.classList.add('modal-open');
};

const showErrorMessage = (errorMessage) => {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  bodyElement.append(errorElement);
  bodyElement.classList.add('modal-open');
  if (errorMessage) {
    bodyElement.querySelector('.error__title').textContent = errorMessage;
  }
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.classList.remove('modal-open');
}


export {showErrorMessage, showSuccessMessage};
