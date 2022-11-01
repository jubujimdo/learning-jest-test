function checkDuplicateArray(testArray) {
  if (!Array.isArray(testArray) || testArray === undefined) {
    throw new Error("Please use an array");
  } else if (testArray.length === 0) {
    throw new Error("Array must not be empty");
  }
  let isDuplicate = false;

  testArray.forEach((element) => {
    for (
      let i = testArray.indexOf(element);
      i < testArray.length && !isDuplicate;
      i++
    ) {
      if (element === testArray[i + 1]) {
        isDuplicate = true;
      }
    }
  });

  return isDuplicate;
}

function generateArray(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(i);
  }
  return a;
}

const testArray = generateArray(100);

console.time("First");

checkDuplicateArray(testArray);

console.timeEnd("First");

module.exports.checkDuplicateArray = checkDuplicateArray;
