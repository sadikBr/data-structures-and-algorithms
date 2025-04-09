function cancellable(func, args, timeout) {
  const intervalID = setInterval(() => {
    return func(...args);
  }, timeout);

  return () => {
    clearInterval(intervalID);
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


