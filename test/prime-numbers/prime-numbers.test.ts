import { isPrimeNumber } from "../../src/prime-numbers/prime-numbers";

test.each([
  [12, false],
  [2, true],
  [11, true],
  [997, true]
])(
  "should determine if it is a prime number - %s",
  (givenNumber: number, expectedResult: boolean) => {
    expect(isPrimeNumber(givenNumber)).toBe(expectedResult);
  }
);
