import { hello } from "../../src/hello-world/app";

test("hello should world", () => {
  expect(hello()).toBe("hello, world.");
});

test("hello should cole", () => {
  expect(hello("cole")).toBe("hello, cole.");
});
