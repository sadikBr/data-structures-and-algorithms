function debounce(func, timeout) {
  let timeoutID;

  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
      console.log("Canceled");
    }

    timeoutID = setTimeout(() => func(...args), timeout);
  }
}

const log = debounce(console.log, 100);

log("Hi Brahim");
log("Hi Brahim");
log("Hi Brahim");
log("Hi Brahim");
log("Hi Brahim");
