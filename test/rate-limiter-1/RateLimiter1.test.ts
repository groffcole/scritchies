import RateLimiter1 from "../../src/rate-limiter-1/RateLimiter1";

const CUSTOMER_ID = 12345;
let rateLimiter: RateLimiter1;

beforeEach(() => {
  rateLimiter = new RateLimiter1();
});

test("should initialize the number of requests for a given customer id", () => {
  setNumberOfCustomerRequests(CUSTOMER_ID, 1);

  const numberOfRequests = rateLimiter.getNumberOfCustomerRequests(CUSTOMER_ID);

  expect(numberOfRequests).toBe(1);
});

test("should increment the number of requests for a given customer id", () => {
  setNumberOfCustomerRequests(CUSTOMER_ID, 2);

  const numberOfRequests = rateLimiter.getNumberOfCustomerRequests(CUSTOMER_ID);

  expect(numberOfRequests).toBe(2);
});

test("should allow customer to make less than three requests", () => {
  setNumberOfCustomerRequests(CUSTOMER_ID, 2);

  const isCustomerAllowed = rateLimiter.customerAllowedToMakeRequest(CUSTOMER_ID);

  expect(isCustomerAllowed).toBe(true);
});

test("should not allow customer to make more than two requests", () => {
  setNumberOfCustomerRequests(CUSTOMER_ID, 3);

  const isCustomerAllowed = rateLimiter.customerAllowedToMakeRequest(CUSTOMER_ID);

  expect(isCustomerAllowed).toBe(false);
});

test("should throw an error if the customer does_not exist", () => {
  const expectedErrorMessage = "the customer does_not exist";
  let actualErrorMessage: string;

  try {
    rateLimiter.customerAllowedToMakeRequest(CUSTOMER_ID);
  } catch (error) {
    actualErrorMessage = error.message;
  }

  expect(actualErrorMessage).toBe(expectedErrorMessage);
});

const setNumberOfCustomerRequests = (customerId: number, numberOfRequests: number) => {
  for (let i = 0; i < numberOfRequests; ++i) {
    rateLimiter.incrementNumberOfCustomerRequests(customerId);
  }
};
