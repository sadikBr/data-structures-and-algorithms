function flat(array, depth) {
  if (depth === 0) return array;

  const result = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
}
