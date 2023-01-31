import { brackets } from "./brackets.js";

test("Brackets", () => {
  expect(brackets("()")).toBeTruthy();
  expect(brackets("[]")).toBeTruthy();
  expect(brackets("{}")).toBeTruthy();
  expect(brackets("[]{}()")).toBeTruthy();
  expect(brackets("([{()}])()[[()]]{}()")).toBeTruthy();
  expect(brackets("())")).toBeFalsy();
  expect(brackets("(){[]}}")).toBeFalsy();
  expect(brackets("([{")).toBeFalsy();
  expect(brackets("([{)]}")).toBeFalsy();
  expect(brackets("([]}")).toBeFalsy();
});
