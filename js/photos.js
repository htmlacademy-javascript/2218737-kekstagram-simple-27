const getData = (onError) => () => fetch(
  'https://27.javascript.pages.academy/kekstagram-simple/data',
  {
    method: 'GET',
    credentials: 'same-origin'
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })
  .catch((err) => {
    onError(err);
  });

const getPhotos = getData(alert);

export {getPhotos};
