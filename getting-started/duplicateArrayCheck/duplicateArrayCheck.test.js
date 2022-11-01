const duplicatesInArray = require("./hasDuplicates");
const hasDuplicates = jest.spyOn(duplicatesInArray, "hasDuplicates");

describe("Test duplicates in arrays", () => {
  test("Array has duplicates", () => {
    const duplicateArray = [1, 2, 3, 1];
    expect(hasDuplicates(duplicateArray)).toBeTruthy();
  });
  test("Array has duplicates", () => {
    const duplicateArray = ["Hello", 2, 3, "Hello"];
    expect(hasDuplicates(duplicateArray)).toBeTruthy();
  });
  test("Array has no duplicates", () => {
    const uniqueArray = [1, 2, 3, 4];
    expect(hasDuplicates(uniqueArray)).toBeFalsy();
  });
  test("Array has no duplicates", () => {
    const uniqueArray = [1, 2, "Hello", 4];
    expect(hasDuplicates(uniqueArray)).toBeFalsy();
  });
  test("Function gets wrong parameter type", () => {
    expect(() => hasDuplicates("Wrong type")).toThrow(
      new Error("Please use an array")
    );
  });
  test("Array is empty", () => {
    const emptyArray = [];
    expect(() => hasDuplicates(emptyArray)).toThrow(
      new Error("Array must not be empty")
    );
  });
  test("No parameter is passed", () => {
    expect(hasDuplicates).toThrow(new Error("Please use an array"));
  });
});
