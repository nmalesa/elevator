const Request = require("./request");

class Elevator {
  upRequests = [];
  downRequests = [];

  direction = "IDLE";

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  sendUpRequest(upRequest) {
    if (upRequest.location === "OUT") {
      this.upRequests.push(
        new Request(
          this.currentFloor,
          upRequest.currentFloor,
          "UP",
          "OUT"
        )
      );
    }
    this.upRequests.push(upRequest);
    this.upRequests.sort((a, b) => (a.desiredFloor - b.desiredFloor))
  }

  sendDownRequest(downRequest) {
    if (downRequest.location === "OUT") {
      this.downRequests.push(
        new Request(
          this.currentFloor,
          downRequest.currentFloor,
          "DOWN",
          "OUT"
        )
      );
    }
    this.downRequests.push(downRequest);
    this.downRequests.sort((a, b) => (b.desiredFloor - a.desiredFloor));
  }

  run() {
    if (!this.upRequests.length || !this.downRequests.length) {
      this.processRequests();
    }

    console.log("Finished all requests.");
    this.direction = "IDLE";
  }

  // getDirectionToFloor(floor) {
  //   return floor > this.currentFloor
  //     ? (this.direction = "UP")
  //     : (this.direction = "DOWN");
  // }

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
