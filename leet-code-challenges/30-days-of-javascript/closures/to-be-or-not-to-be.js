function expect(value) {
  toBe = (other) => {
    if (value === other) return true;
    else throw new Error("Not Equal");
  }

  notToBe = (other) => {
    if (value !== other) return true;
    else throw new Error("Equal");
  }

  return this;
}

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(8));
console.log(expect(5).notToBe(8));
