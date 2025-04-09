function createCounter(n) {
  let newValue = n;

  increment = () => {
    newValue += 1;
    return newValue;
  }

  decrement = () => {
    newValue -= 1;
    return newValue;
  }

  reset = () => {
    newValue = n;
    return newValue;
  }

  return this;
}

const counter = createCounter(0);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
