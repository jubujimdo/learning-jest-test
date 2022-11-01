function hasDuplicates(testArray) {
  if (!Array.isArray(testArray) || testArray === undefined) {
    throw new Error("Please use an array");
  } else if (testArray.length === 0) {
    throw new Error("Array must not be empty");
  }
  let s = new Set();

  for (let i = 0; i < testArray.length; i++) {
    console.log(s);
    if (s.has(testArray[i])) {
      return true;
    }
    s.add(testArray[i]);
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

module.exports.hasDuplicates = hasDuplicates;
