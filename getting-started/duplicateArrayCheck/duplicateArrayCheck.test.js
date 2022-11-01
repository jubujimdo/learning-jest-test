const duplicatesInArray = require("./hasDuplicates");
const hasDuplicates = jest.spyOn(duplicatesInArray, "hasDuplicates");

describe("Test duplicates in arrays", () => {
  describe("Array has duplicates", () => {
    test("Array has duplicate numbers", () => {
      const duplicateArray = [1, 2, 3, 1];
      expect(hasDuplicates(duplicateArray)).toBeTruthy();
    });
    test("Array has duplicate strings", () => {
      const duplicateArray = ["Hello", 2, 3, "Hello"];
      expect(hasDuplicates(duplicateArray)).toBeTruthy();
    });
  });
  describe("Array has no duplicates", () => {
    test("Array with numbers has no duplicates", () => {
      const uniqueArray = [1, 2, 3, 4];
      expect(hasDuplicates(uniqueArray)).toBeFalsy();
    });
    test("Mixed array has no duplicates", () => {
      const uniqueArray = [1, 2, "Hello", 4];
      expect(hasDuplicates(uniqueArray)).toBeFalsy();
    });
    test("Mixed array with number and number as string has no duplicates", () => {
      const uniqueArray = [1, 2, "2", 4];
      expect(hasDuplicates(uniqueArray)).toBeFalsy();
    });
  });
  describe("Test error messages", () => {
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
});
