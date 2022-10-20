class Elevator {
  upRequests = [];
  downRequests = [];

  constructor(currentFloor) {
    this.currentFloor = this.currentFloor;
  }

  sendUpRequest(upRequest) {
    if (upRequest.location === "OUTSIDE_ELEVATOR") {
      this.upRequests.push(upRequest.currentFloor);
      console.log("Up requests: ", this.upRequests);
    }
  }
}

module.exports = Elevator;
