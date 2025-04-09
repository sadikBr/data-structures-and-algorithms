function memoize(func) {
  const cache = new Map();

  return (...args) => {
    const stringArgs = JSON.stringify(args);

    if (cache.has(stringArgs)) {
      return cache.get(stringArgs);
    }

    const value = func(...args);
    cache.set(stringArgs, value);

    return value;
  }
}

let callCount = 0;
const memoizedFunction = memoize((a, b) => {
  callCount += 1;
  return a + b;
});

console.log(memoizedFunction(2, 2));
console.log(memoizedFunction(2, 2));
console.log(callCount);
console.log(memoizedFunction(1, 2));
console.log(callCount);

