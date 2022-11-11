import {getRandomArrayElement, getRandomInt} from "./funcs";
import {PHOTOS_AMOUNT, LikesAmount, Comments, DESCRIPTION} from "./сonstants";

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

export {getPhotos};
