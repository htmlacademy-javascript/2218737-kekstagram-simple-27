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
