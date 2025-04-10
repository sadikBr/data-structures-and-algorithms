class ArrayWrapper {
  constructor(array) {
    this.array = array;
  }

  sumArray() {
    return this.array.reduce((acc, value) => acc + value, 0);
  }

  toString() {
    return JSON.stringify(this.array);
  }
}
