export const isPrimeNumber = (givenNumber: number): boolean => {
  // starting with 2 because 2 is the first prime number
  let divisor = 2;

  while (givenNumber > divisor) {
    // if the quotient has no remainder,
    // then the given number is_not prime
    if (givenNumber % divisor === 0) {
      return false;
    }
    divisor++;
  }

  return true;
};
