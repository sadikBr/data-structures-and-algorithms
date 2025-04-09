function timeLimit(func, timeout) {
  return async (...args) => {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, timeout);

      try {
        const value = await func(...args);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  }
}

async function square(n) {
  await new Promise(resolve => setTimeout(resolve, 3500));
  return n * n;
}

const limited = timeLimit(square, 3000);
limited(4).then(console.log).catch(console.log);
