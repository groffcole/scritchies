import RateLimiter2 from "../../src/rate-limiter-2/RateLimiter2";

let rateLimiter: RateLimiter2;

beforeEach(() => {
  rateLimiter = new RateLimiter2();
});

test.each([[[]], [[2]]])(
  "should throw an error when the number of requests is less than the window size - %s",
  (requests: Array<number>) => {
    const expectedErrorMessage = "the number of requests is less than the window size";
    let actualErrorMessage: string;

    try {
      rateLimiter.allowedToMakeRequest(requests);
    } catch (error) {
      actualErrorMessage = error.message;
    }

    expect(actualErrorMessage).toBe(expectedErrorMessage);
  }
);

test.each([[[11, 0]], [[2, 2, 2, 2, 20]], [[1, 10, 1, 2, 2]]])(
  "should_not be allowed to make more than 10 requests in a size 2 window - %s",
  (requests: Array<number>) => {
    expect(rateLimiter.allowedToMakeRequest(requests)).toBe(false);
  }
);

test.each([[[1, 9]], [[2, 2, 2, 2]], [[1, 5, 1, 2, 2]]])(
  "should be allowed to make at most 10 requests in a size 2 window - %s",
  (requests: Array<number>) => {
    expect(rateLimiter.allowedToMakeRequest(requests)).toBe(true);
  }
);
