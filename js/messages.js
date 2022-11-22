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
  bodyElement.style.overflow = 'modal-open';
};

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  bodyElement.append(errorElement);
  bodyElement.style.overflow = 'hidden';
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
}


export {showErrorMessage, showSuccessMessage};
