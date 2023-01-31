const { DataStack } = require("./dataStack");

let stack;

beforeEach(() => {
  stack = new DataStack([1, 2, 3]);
  return stack;
});

test("Create new stack", () => {
  expect(stack.print()).toMatchObject([1, 2, 3]);
});

test("Add new data to the stack", () => {
  stack.put(4);
  expect(stack.print()).toMatchObject([1, 2, 3, 4]);
});

test("Take data from the stack", () => {
  stack.get();
  expect(stack.print()).toMatchObject([1, 2]);
});

test("Use data from the stack", () => {
  const result = stack.get();
  expect(result).toBe(3);
});

test("Length of stack", () => {
  expect(stack.length).toBe(3);
});
