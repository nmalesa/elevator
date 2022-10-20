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
    }
    this.upRequests.push(upRequest);
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
    }
    this.downRequests.push(downRequest);
    console.log("Down requests: ", this.downRequests);
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
    console.log("Current direction: ", this.direction);
    if (this.direction === "UP" || this.direction === "IDLE") {
      this.processUpRequest();
      this.processDownRequest();
    } else {
      this.processDownRequest();
      this.processUpRequest();
    }
  }

  // NEED TO ITERATE THROUGH REQUESTS
  // GOOD START BUT NEED TO GO THROUGH REQUESTS
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
