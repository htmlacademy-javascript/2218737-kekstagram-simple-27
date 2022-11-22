const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const biggerButton = document.querySelector('.scale__control--bigger');
const smallerButton = document.querySelector('.scale__control--smaller');
const scalingInput = document.querySelector('.scale__control--value');
const photo = document.querySelector('.img-upload__preview img');

const scalePhoto = (value = DEFAULT_SCALE) => {
  photo.style.transform = `scale(${value / MAX_SCALE})`;
  scalingInput.value = `${value}%`;
};

const onScaleButtonClick = (scale) => () => {
  const currentValue = parseInt(scalingInput.value, 10);
  let newValue = currentValue + (scale * SCALE_STEP);
  if (scale > 0 && newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  if (scale < 0 && newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scalePhoto(newValue);
};

const resetScale = () => {
  scalePhoto();
};

smallerButton.addEventListener('click', onScaleButtonClick(-1));
biggerButton.addEventListener('click', onScaleButtonClick(1));

export {resetScale};
