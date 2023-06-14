const sortedArray = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];

function BinarySearch(
  array,
  value,
  startIndex = 0,
  endIndex = array.length - 1
) {
  if (startIndex > endIndex) return -1;

  const centerIndex = Math.floor((startIndex + endIndex) / 2);
  const centerValue = array[centerIndex];

  if (value === centerValue) return centerIndex;

  if (value < centerValue)
    return BinarySearch(array, value, startIndex, centerIndex - 1);

  if (value > centerValue)
    return BinarySearch(array, value, centerIndex + 1, endIndex);
}

console.log(BinarySearch(sortedArray, 9));
