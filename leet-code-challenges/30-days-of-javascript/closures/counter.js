function createCounter(n) {
  let increment = 0;

  return () => {
    const returnValue = n + increment;
    increment += 1;

    return returnValue;
  }
}

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
