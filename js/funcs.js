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

export {getRandomInt, checkStringLength, getRandomArrayElement};
