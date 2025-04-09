function reduceArray(array, func, initialValue) {
  return array.reduce((acc, item) => func(acc, item), initialValue);
}

function sum(acc, item) {
  return acc + item;
}

function sumOfSquares(acc, item) {
  return acc + item * item;
}

function zero(_acc, _item) {
  return 0;
}

console.log(reduceArray([1, 2, 3, 4], sum, 0));
console.log(reduceArray([1, 2, 3, 4], sumOfSquares, 100));
console.log(reduceArray([], zero, 25));
