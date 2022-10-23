import { greeting } from "./sandbox";

test("Greeting in English", () => {
  expect(greeting("EN")).toBe("Hello in English");
});

test("Greeting in German", () => {
  expect(greeting("DE")).toBe("Hello in German");
});

test("Greeting in Portuguese", () => {
  expect(greeting("PT")).toBe("Hello in Portuguese");
});

test("Greeting in Italian", () => {
  expect(greeting("KLM")).toBe("Hello in Italian");
});

test("Throw error if no parameter given", () => {
  expect(() => {
    greeting();
  }).toThrow(Error("Please use a string"));
});

test("Throw error if no parameter given, easier method", () => {
  expect(greeting).toThrow(Error("Please use a string"));
});

test("Throw error if parameter is not a string", () => {
  expect(() => {
    greeting(1);
  }).toThrow(new Error("Please use a string"));
});
