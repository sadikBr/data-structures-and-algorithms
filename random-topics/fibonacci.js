function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacci(n) {
  var values = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    var newValue = values[i - 1] + values[i - 2];

    values.push(newValue);
  }

  return values[n];
}

console.log("Recursive fibonacci of 3: " + fibonacciRecursive(3), "|", "Dynamic fibonacci of 3: " + fibonacci(3));
console.log("Recursive fibonacci of 5: " + fibonacciRecursive(5), "|", "Dynamic fibonacci of 5: " + fibonacci(5));
console.log("Recursive fibonacci of 8: " + fibonacciRecursive(8), "|", "Dynamic fibonacci of 8: " + fibonacci(8));
console.log("Recursive fibonacci of 20: " + fibonacciRecursive(20), "|", "Dynamic fibonacci of 20: " + fibonacci(20));
