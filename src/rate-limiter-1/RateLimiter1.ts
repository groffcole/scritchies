class RateLimiter1 {
  private readonly MAXIMUM_NUMBER_OF_REQUESTS = 2;
  private customerRequests = new Map();

  customerAllowedToMakeRequest(customerId: number): boolean {
    if (this.customerRequests.has(customerId)) {
      return this.customerRequests.get(customerId) <= this.MAXIMUM_NUMBER_OF_REQUESTS;
    }

    throw new Error("the customer does_not exist");
  }

  incrementNumberOfCustomerRequests(customerId: number) {
    if (this.customerRequests.has(customerId)) {
      let numberOfRequests = this.customerRequests.get(customerId);
      this.customerRequests.set(customerId, ++numberOfRequests);
    } else {
      this.customerRequests.set(customerId, 1);
    }
  }

  getNumberOfCustomerRequests(customerId: number) {
    return this.customerRequests.get(customerId);
  }
}

export default RateLimiter1;