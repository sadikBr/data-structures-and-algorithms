function groupBy(array, func) {
  const result = {};

  array.forEach(item => {
    const value = func(item);
    if (!result.hasOwnProperty(value)) {
      result[value] = [];
    }

    result[value].push(item);
  });

  return result;
};

const array = [
  { "id": "1" },
  { "id": "1" },
  { "id": "2" }
];

function getId(item) {
  return item.id;
}

const groups = groupBy(array, getId);
console.log(groups);
