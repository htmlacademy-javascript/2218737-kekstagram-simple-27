let photosAmount = 25

let likesAmount = {
  min: 15,
  max: 200
};

let comments = {
  min: 0,
  max: 200
}

let description = [
  "На отдыхе.",
  "Тусим с друзьями.",
  "Просто крутой кадр.",
  "А вы тут бывали?",
  "Хочется поделиться этой красотой.",
  "Зацените!",
  "Проводим отпуск с пользой.",
  "Это было волшебно!",
  "Хотел бы я тут остаться навсегда.",
  "Тест новой камеры."
]

let getRandomInt = function (a, b) {
  if (a > b) {
    return NaN;
  }

  let random = Math.random(); // от 0 до 1
  return random * (b - a) + a ; // от а до а+1
};

console.log(getRandomInt(201,200))

let checkStringLength = function (str, maxLength) {
  return str.length <= maxLength
};

console.log(checkStringLength("1", 1))

let getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.lenght - 1)]

let createPhotos = (index) => ({
  id: index,
  url: 'photos/{index}}.jpg',
  description: getRandomArrayElement(description),
  likes: getRandomInt(likesAmount.min, likesAmount.max),
  comments:  getRandomInt(comments.min, comments.max)
});

let getPhotos = () =>
  Array.from({lenght: photosAmount}, (photoIndex) =>
    createPhotos(photoIndex + 1)
  );


