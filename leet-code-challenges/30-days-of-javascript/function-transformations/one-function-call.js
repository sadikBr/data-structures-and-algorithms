function once(func) {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      return func(...args);
    }

    return undefined;
  }
}

function sum(a, b, c) {
  return a + b + c;
}

const onceFn = once(sum);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 4, 6));
