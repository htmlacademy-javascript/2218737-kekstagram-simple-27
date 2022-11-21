const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

const effects = {};

for (let i = 0; i < EFFECTS.length; i++) {
  effects[EFFECTS[i]['name']] = EFFECTS[i];
}

const photo = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;


const moveSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = effects[evt.target.value];
  moveSlider();
};

const onSliderMove = () => {
  photo.style.filter = 'none';
  photo.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  photo.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  photo.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});


const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  moveSlider();
};


form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderMove);

export {resetEffects};

