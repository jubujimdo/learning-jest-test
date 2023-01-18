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
const cacheFibOld = new Map()

function fibCache(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cacheFib.has(n)) {
    return cacheFib.get(n);
  }
  const result = fibCache(n - 1) + fibCache(n - 2);
  cacheFib.set(n, result);
  return result;
}

function fibCacheOld(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cacheFibOld.has(n)) {
    return cacheFibOld.get(n);
  }
  cacheFibOld.set(n, fibCacheOld(n - 1) + fibCacheOld(n - 2));
  return fibCacheOld(n - 1) + fibCacheOld(n - 2);
}

console.time("CacheOld");
//fibCache(30);
fibCacheOld(30);
console.timeEnd("CacheOld");

console.time("Cache");
//fibCache(30);
fibCache(30);
console.timeEnd("Cache");

console.time("Memoized");
//memoizedFibonacci(30);
memoizedFibonacci(30);
console.timeEnd("Memoized");

/* console.time("Regular");
//fib(30);
console.log(fib(30));
console.timeEnd("Regular"); */
