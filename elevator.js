const Request = require("./request");

class Elevator {
  upRequests = [];
  downRequests = [];

  direction = "IDLE";

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  sendUpRequest(upRequest) {
    if (upRequest.location === "OUTSIDE_ELEVATOR") {
      this.upRequests.push(
        new Request(
          this.currentFloor,
          upRequest.currentFloor,
          "UP",
          "OUTSIDE_ELEVATOR"
        )
      );
      this.upRequests.sort((a, b) => (a - b))
    }
    this.upRequests.push(upRequest);
    this.upRequests.sort((a, b) => (a - b))
    console.log("Up requests: ", this.upRequests);
  }

  sendDownRequest(downRequest) {
    if (downRequest.location === "OUTSIDE_ELEVATOR") {
      this.downRequests.push(
        new Request(
          this.currentFloor,
          downRequest.currentFloor,
          "DOWN",
          "OUTSIDE_ELEVATOR"
        )
      );
      // console.log("Unsorted: ", this.downRequests);
      this.downRequests.sort((a, b) => (b - a));
      // console.log("Sorted: ", this.downRequests)
    }
    this.downRequests.push(downRequest);
    this.downRequests.sort((a, b) => (b - a));
    // console.log("I should not be called.");
  }

  run() {
    if (!this.upRequests.length || !this.downRequests.length) {
      this.processRequests();
    }

    console.log("Finished all requests.");
    this.direction = "IDLE";
  }

  getDirectionToFloor(floor) {
    return floor > this.currentFloor
      ? (this.direction = "UP")
      : (this.direction = "DOWN");
  }

  processRequests() {
    if (this.direction === "UP" || this.direction === "IDLE") {
      this.processUpRequest();
      this.processDownRequest();
    } else {
      this.processDownRequest();
      this.processUpRequest();
    }
  }

  processUpRequest() {
    while (this.upRequests.length) {
      let upRequest = this.upRequests.shift();
      this.currentFloor = upRequest.desiredFloor;
      console.log(`Arrived at ${this.currentFloor}!`);
    }

    if (this.downRequests.length) {
      this.direction = "DOWN";
    } else {
      this.direciton = "IDLE";
    }
  }

  processDownRequest() {
    while (this.downRequests.length) {
      let downRequest = this.downRequests.shift();
      this.currentFloor = downRequest.desiredFloor;
      console.log(`Arrived at ${this.currentFloor}!`);
    }

    if (this.upRequests.length) {
      this.direction = "UP";
    } else {
      this.direction = "IDLE";
    }
  }
}

module.exports = Elevator;
