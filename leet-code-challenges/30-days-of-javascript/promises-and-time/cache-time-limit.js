class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    let returnValue = false;

    if (this.cache.has(key)) {
      const timeout = this.cache.get(key).timeout;
      clearTimeout(timeout);
      returnValue = true;
    }

    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
      value,
      timeout,
    });

    return returnValue;
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

const limitedCache = new TimeLimitedCache();

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

console.log(limitedCache.set(1, 42, 100));
console.log(limitedCache.get(1));
console.log(limitedCache.count());
sleep(500).then(() => limitedCache.get(1)).then(console.log);
