import { Hello } from "../../src/hello-world-oo/app";


test("hello should world", () => {
  expect(new Hello().holler()).toBe("hello, world.");
});

test("hello should cole", () => {
  expect(new Hello("cole").holler()).toBe("hello, cole.");
});
