import { isPrimeNumber } from "../../src/prime-numbers/prime-numbers";

test.each([
  [12, false],
  [2, true],
  [11, true],
  [997, true],
  [137, true],
  [237, false]
])(
  "should determine if it is a prime number - %s, %s",
  (givenNumber: number, expectedResult: boolean) => {
    expect(isPrimeNumber(givenNumber)).toBe(expectedResult);
  }
);
