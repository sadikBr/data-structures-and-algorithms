function chunk(arr, size) {
  const chunks = Math.ceil(arr.length / size);
  const resultArray = [];

  for (let i = 0; i < chunks; i++) {
    const chunkArray = [];
    for (let j = 0; j < size; j++) {
      const index = size * i + j;
      if (index < arr.length) chunkArray.push(arr[index]);
    }
    resultArray.push(chunkArray);
  }

  return resultArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(chunk(numbers, 1));
console.log(chunk(numbers, 2));
console.log(chunk(numbers, 3));
console.log(chunk(numbers, 4));
