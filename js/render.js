const render = (photos) => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  photos.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments;
    document.querySelector('.pictures').appendChild(photoElement);
  });
};

export {render};
