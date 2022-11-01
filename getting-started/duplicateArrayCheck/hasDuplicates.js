function hasDuplicates(testArray) {
  if (!Array.isArray(testArray) || testArray === undefined) {
    throw new Error("Please use an array");
  } else if (testArray.length === 0) {
    throw new Error("Array must not be empty");
  }
  const s = {};

  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] in s) {
      return true;
    }
    s[testArray[i]] = true;
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
