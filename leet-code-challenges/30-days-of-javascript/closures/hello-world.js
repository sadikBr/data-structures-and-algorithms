function createHelloWorld() {
  return () => {
    console.log("Hello World!");
  }
}

const f = createHelloWorld();

f();
