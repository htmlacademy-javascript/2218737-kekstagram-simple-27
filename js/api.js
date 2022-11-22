const createLoader = async (onSuccess, onError) => {
  try {
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple/data'
    );

    if(!response.ok) {
      throw new Error();
    }

    const images = await response.json();
    onSuccess(images);
  } catch (error) {
    onError(error.message);
  }
};

const sendData = async (onSuccess, onError, body) => {
  try {
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      }
    );

    if(!response.ok) {
      throw new Error();
    }

    onSuccess();
  } catch (error) {
    onError(error.message);
  }
};
export {createLoader, sendData};
