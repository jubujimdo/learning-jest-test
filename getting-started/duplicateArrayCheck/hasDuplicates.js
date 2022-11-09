function hasDuplicates(testArray) {
  if (!Array.isArray(testArray) || testArray === undefined) {
    throw new Error("Please use an array");
  } else if (testArray.length === 0) {
    throw new Error("Array must not be empty");
  }

  let s = new Set();

  for (let i = 0; i < testArray.length; i++) {
    if (!Number.isInteger(testArray[i])) {
      throw new Error("Please make sure your Array contains only numbers");
    }
    if (s.has(testArray[i])) {
      return true;
    }
    s.add(testArray[i]);
  }
  return false;
}

function hasDuplicatesWithMap(testArray) {
  if (!Array.isArray(testArray) || testArray === undefined) {
    throw new Error("Please use an array");
  } else if (testArray.length === 0) {
    throw new Error("Array must not be empty");
  }
  let m = new Map();

  for (let i = 0; i < testArray.length; i++) {
    if (m.get(testArray[i])) {
      return true;
    }
    m.set(testArray[i], true);
  }
  return false;
}

const hasDupsSet = (arr) => {
  const s = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (s.has(arr[i])) {
      return true;
    }
    s.add(arr[i]);
  }
  return false;
};

function hasDupsObj(arr) {
  const s = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in s) {
      return true;
    }
    s[arr[i]] = true;
  }
  return false;
}

function generateArray(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(i);
  }
  return a;
}

/* let test100k = generateArray(100000);
let test1Mio = generateArray(1000000);
console.time("Check Set 100k");
hasDuplicates(test100k);
console.timeEnd("Check Set 100k");
console.time("Check Set 1Mio");
hasDuplicates(test1Mio);
console.timeEnd("Check Set 1Mio");

console.time("Check Map 100k");
hasDuplicatesWithMap(test100k);
console.timeEnd("Check Map 100k");
console.time("Check Map 1Mio");
hasDuplicatesWithMap(test1Mio);
console.timeEnd("Check Map 1Mio"); */

module.exports.hasDuplicates = hasDuplicates;
