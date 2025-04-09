class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    this.cache.set(key, value);

    // fix this.
    setTimeout(() => {
      this.cache.filter((item) => {
        item !== key
      })
    }, duration);
  }

  get(key) {
    return this.cache.get(key) || -1;
  }

  count() {
    return this.cache.size;
  }
}

const limitedCache = new TimeLimitedCache();

limitedCache.set(1, 42, 100);
limitedCache.get(1);
limitedCache.count();
limitedCache.get(1);
