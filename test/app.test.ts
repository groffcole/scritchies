import { hello } from "../src/app";

test("hello should world", () => {
  const result = hello();
  expect(result).toBe("world");
});
