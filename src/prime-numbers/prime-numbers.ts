export const isPrimeNumber = (givenNumber: number): boolean => {
  // starting with 2 because 2 is the first prime number
  let divisor = 2;

  // there is no need to check when the divisor is greater than half of the given number
  // because any number will not be divisible by a number bigger than half of it
  while (divisor <= givenNumber / 2) {
    // if the quotient has no remainder then the given number is_not prime
    if (givenNumber % divisor === 0) {
      return false;
    }

    if (divisor <= 3) {
      divisor++;
    } else {
      // divisors greater than three can be increased by 2 because any number 
      // divisible by an even number is divisible by 2
      divisor += 2;
    }
  }

  // if we've made it this far then the given number is prime
  return true;
};
