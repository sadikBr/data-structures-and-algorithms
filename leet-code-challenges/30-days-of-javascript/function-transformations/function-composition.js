function compose(functions) {
  return function (x) {
    let returnValue = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      const func = functions[i];
      returnValue = func(returnValue);
    }

    return returnValue;
  }
}

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4));
