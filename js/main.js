let randomFromAtoB = function (a, b) {
  if (a > b) {
    return NaN;
  }

  let random = Math.random(); // от 0 до 1
  return random * (b - a) + a ; // от а до а+1
};

console.log(randomFromAtoB(200,199))

let isCorrectLengt = function (str, maxLength) {
  let c = str.length;
  if (c <= maxLength) {
    return true;
  } else {
    return false;
  }
};

console.log(isCorrectLengt("1", 1))
