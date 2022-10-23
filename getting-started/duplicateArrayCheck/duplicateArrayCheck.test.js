const duplicateArray = require("./dulicateArrayCheck");
const checkDuplicateArray = jest.spyOn(duplicateArray, "checkDuplicateArray");

describe("Test duplicates in arrays", () => {
  test("Array has duplicates", () => {
    const duplicateArray = [1, 2, 3, 1];
    expect(checkDuplicateArray(duplicateArray)).toBeTruthy();
  });
  test("Array has duplicates", () => {
    const duplicateArray = ["Hello", 2, 3, "Hello"];
    expect(checkDuplicateArray(duplicateArray)).toBeTruthy();
  });
  test("Array has no duplicates", () => {
    const uniqueArray = [1, 2, 3, 4];
    expect(checkDuplicateArray(uniqueArray)).toBeFalsy();
  });
  test("Array has no duplicates", () => {
    const uniqueArray = [1, 2, "Hello", 4];
    expect(checkDuplicateArray(uniqueArray)).toBeFalsy();
  });
  test("Function gets wrong parameter type", () => {
    expect(() => checkDuplicateArray("Wrong type")).toThrow(
      new Error("Please use an array")
    );
  });
  test("Array is empty", () => {
    const emptyArray = [];
    expect(() => checkDuplicateArray(emptyArray)).toThrow(
      new Error("Array must not be empty")
    );
  });
  test("No parameter is passed", () => {
    expect(checkDuplicateArray).toThrow(new Error("Please use an array"));
  });
});
