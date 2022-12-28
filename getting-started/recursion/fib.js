function fib(n, cache) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cache.has(n)) {
    return cache.get(n);
  }

  cache.set(n, fib(n - 1, cache) + fib(n - 2, cache));
  return fib(n - 1, cache) + fib(n - 2, cache);
}

const memoize = (func) => {
  const cache = new Map();

  return function (n) {
    return func(n, cache);
  };
};

const memoizedFibonacci = memoize(fib);

const cacheFib = new Map();

function fibCache(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cacheFib.has(n)) {
    return cacheFib.get(n);
  }
  cacheFib.set(n, fibCache(n - 1) + fibCache(n - 2));
  return fibCache(n - 1) + fibCache(n - 2);
}

console.time("Memoized");
//memoizedFibonacci(30);
console.log(memoizedFibonacci(30));
console.timeEnd("Memoized");

/* console.time("Regular");
//fib(30);
console.log(fib(30));
console.timeEnd("Regular"); */

console.time("Cache");
//fibCache(30);
console.log(fibCache(30));
console.timeEnd("Cache");
