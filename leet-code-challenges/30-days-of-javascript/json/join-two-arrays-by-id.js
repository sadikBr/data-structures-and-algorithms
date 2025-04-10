function joinArrays(array1, array2) {
  const result = [...array1];

  for (let i = 0; i < array2.length; i++) {
    const item = array2[i];
    const other = result.find(a => a.id === item.id);

    if (other) {
      Object.keys(item).forEach(key => {
        other[key] = item[key];
      });
    } else {
      result.push(item);
    }
  }

  return result;
}

