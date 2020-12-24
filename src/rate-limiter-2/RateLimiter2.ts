class RateLimiter2 {
  private readonly MAXIMUM_NUMBER_OF_REQUESTS = 10;
  private readonly WINDOW_SIZE = 2;

  allowedToMakeRequest(requests: Array<number>): boolean {
    // compare number of request with window size
    if (requests.length < this.WINDOW_SIZE) {
      throw new Error("the number of requests is less than the window size");
    }

    // initial window calculation
    let largestNumberOfRequestsWithGivenWindowSize = 0;
    for (let i = 0; i < this.WINDOW_SIZE; ++i) {
      largestNumberOfRequestsWithGivenWindowSize += requests[i];
    }

    if (requests.length === this.WINDOW_SIZE) {
      this.doLargestNumberOfRequestFitInsideWindow(
        largestNumberOfRequestsWithGivenWindowSize
      );
    }

    // subsequent window calculations
    let numberOfRequestsInCurrentWindow = largestNumberOfRequestsWithGivenWindowSize;
    for (let i = 0; i < requests.length; ++i) {
      numberOfRequestsInCurrentWindow -= requests[i];
      numberOfRequestsInCurrentWindow += requests[i + this.WINDOW_SIZE];

      if (numberOfRequestsInCurrentWindow > largestNumberOfRequestsWithGivenWindowSize) {
        largestNumberOfRequestsWithGivenWindowSize = numberOfRequestsInCurrentWindow;
      }
    }

    return this.doLargestNumberOfRequestFitInsideWindow(
      largestNumberOfRequestsWithGivenWindowSize
    );
  }

  private doLargestNumberOfRequestFitInsideWindow(numberOfRequests: number): boolean {
    return numberOfRequests <= this.MAXIMUM_NUMBER_OF_REQUESTS;
  }
}

export default RateLimiter2;