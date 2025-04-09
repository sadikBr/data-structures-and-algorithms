function factorialRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

function factorial(n) {
  var result = 1;

  while (n >= 1) {
    result = n * result;
    n = n - 1;
  }

  return result;
}

console.log("Recursive: 3! = " + factorialRecursive(3), "|", "Dynamique: 3! = " + factorial(3))
console.log("Recursive: 5! = " + factorialRecursive(5), "|", "Dynamique: 5! = " + factorial(5))
console.log("Recursive: 8! = " + factorialRecursive(8), "|", "Dynamique: 8! = " + factorial(8))
console.log("Recursive: 20! = " + factorialRecursive(20), "|", "Dynamique: 20! = " + factorial(20))
