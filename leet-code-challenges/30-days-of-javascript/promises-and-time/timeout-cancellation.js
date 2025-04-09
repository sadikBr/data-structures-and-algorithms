function cancellable(func, args, timeout) {
  const timeoutID = setTimeout(() => {
    return func(...args);
  }, timeout);

  return () => {
    clearTimeout(timeoutID);
  }
}

function log(...chars) {
  console.log("Hi, " + chars.join(''));
}

const cancelFn = cancellable(log, "Brahim", 2000);
setTimeout(() => {
  cancelFn();
  console.log("The logging function has been canceled.");
}, 500);


