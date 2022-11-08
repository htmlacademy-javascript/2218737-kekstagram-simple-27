const PHOTOS_AMOUNT = 25;

const DESCRIPTION = [
  'На отдыхе.',
  'Тусим с друзьями.',
  'Просто крутой кадр.',
  'А вы тут бывали?',
  'Хочется поделиться этой красотой.',
  'Зацените!',
  'Проводим отпуск с пользой.',
  'Это было волшебно!',
  'Хотел бы я тут остаться навсегда.',
  'Тест новой камеры.',
];

const LikesAmount = {
  min: 15,
  max: 200,
};

const Comments = {
  min: 0,
  max: 200,
};

const getRandomInt = function (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lowerRandom = Math.ceil(Math.min(a, b));
  const upperRandom = Math.floor(Math.max(a,b));
  const resultRandom = Math.random() * (upperRandom - lowerRandom + 1) + lowerRandom;
  return Math.floor(resultRandom);
};

const checkStringLength = function (str, maxLength) {
  return str.length <= maxLength;
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createPhotos = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInt(LikesAmount.min, LikesAmount.max),
  comments:  getRandomInt(Comments.min, Comments.max)
});

const getPhotos = () =>
  Array.from({length: PHOTOS_AMOUNT}, (_, photoIndex) =>
    createPhotos(photoIndex + 1)
  );

const startGettingPhotos = getPhotos();
