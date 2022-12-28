function sumToLoop(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

function sumToProg(n) {
  return (n * (n + 1)) / 2;
}

console.time("Loop");
console.log(sumToLoop(1000));
console.timeEnd("Loop");

console.time("Recursion");
console.log(sumToRecursion(1000));
console.timeEnd("Recursion");

console.time("Progression");
console.log(sumToRecursion(1000));
console.timeEnd("Progression");
