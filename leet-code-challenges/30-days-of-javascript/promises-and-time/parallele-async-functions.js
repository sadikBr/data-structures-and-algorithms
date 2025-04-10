function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      return resolve([]);
    }

    const returnValue = Array.from({ length: functions.length }).fill(null);
    let resolveCount = 0;

    functions.forEach(async (func, index) => {
      try {
        const value = await func();
        returnValue[index] = value;
        resolveCount++;

        if (resolveCount === functions.length) {
          resolve(returnValue)
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

const functions = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 1000))
];
promiseAll(functions).then(console.log);
