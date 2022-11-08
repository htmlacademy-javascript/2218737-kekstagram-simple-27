const PHOTOS_AMOUNT = 25;

const LikesAmount = {
  min: 15,
  max: 200
};

const Comments = {
  min: 0,
  max: 200
};

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
  'Тест новой камеры.'
];

const getRandomInt = function (a, b) {
  if (a > b) {
    return NaN;
  }

  const random = Math.random(); // от 0 до 1
  return random * (b - a) + a ; // от а до а+1
};

getRandomInt();

const checkStringLength = function (str, maxLength) {
  return str.length <= maxLength;
};

checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.lenght - 1)];

const createPhotos = (index) => ({
  id: index,
  url: 'photos/{index}}.jpg',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInt(LikesAmount.min, LikesAmount.max),
  comments:  getRandomInt(Comments.min, Comments.max)
});

const getPhotos = () =>
  Array.from({lenght: PHOTOS_AMOUNT}, (_, photoIndex) =>
    createPhotos(photoIndex + 1)
  );


createPhotos();
getPhotos();
