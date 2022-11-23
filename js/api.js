const SOURCE_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SOURCE = 'https://27.javascript.pages.academy/kekstagram-simple';

const createLoader = async (onError) => {
  try {
    const response = await fetch(
      SOURCE_DATA,
      {
        method: 'GET',
        credentials: 'same-origin'
      },
    );

    if(!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    onError(error.message);
  }
};

const sendData = async (onSuccess, onError, body) => {
  try {
    const response = await fetch(
      SOURCE,
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
