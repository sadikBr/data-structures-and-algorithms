function sortBy(array, func) {
  return array.toSorted((a, b) => func(a) - func(b));
}
