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

module.exports.checkDuplicateArray = checkDuplicateArray;
