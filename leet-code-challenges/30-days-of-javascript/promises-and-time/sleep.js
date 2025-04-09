function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

async function TestSleep() {
  await sleep(4000);
  console.log("Logging after 4 seconds of sleep.");
}

TestSleep();
