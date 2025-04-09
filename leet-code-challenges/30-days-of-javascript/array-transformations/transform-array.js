function applyTransform(array, func) {
  return array.map((item, index) => func(item, index));
}

function plusOne(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

console.log(applyTransform([1, 2, 3], plusOne));
console.log(applyTransform([1, 2, 3], plusI));
console.log(applyTransform([1, 2, 3], constant));
