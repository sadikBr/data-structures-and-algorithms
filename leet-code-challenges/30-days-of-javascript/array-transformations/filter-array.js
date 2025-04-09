function applyFilter(array, func) {
  return array.filter((item, index) => func(item, index));
}

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(_n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

console.log(applyFilter([0, 10, 20, 30], greaterThan10));
console.log(applyFilter([1, 2, 3], firstIndex));
console.log(applyFilter([-2, -1, 0, 1, 2], plusOne));
