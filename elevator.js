const Request = require("./request");

class Elevator {
  upRequests = [];
  downRequests = [];

  direction = {
    up: "UP",
    down: "DOWN",
    idle: "IDLE",
  };

  currentDirection = this.direction.idle;

  location = {
    inside: "INSIDE_ELEVATOR",
    outside: "OUTSIDE_ELEVATOR",
  };

  currentDirection = "";

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  sendUpRequest(upRequest) {
    if (upRequest.location === "OUTSIDE_ELEVATOR") {
      this.upRequests.push(
        new Request(
          this.currentFloor,
          upRequest.currentFloor,
          this.direction.up,
          this.location.outside
        )
      );
      console.log("Up requests: ", this.upRequests);
    } else {
      this.upRequests.push(upRequest);
      console.log("Up requests: ", this.upRequests);
    }
  }

  sendDownRequest(downRequest) {
    if (downRequest.location === "OUTSIDE_ELEVATOR") {
      this.downRequests.push(
        new Request(
          this.currentFloor,
          downRequest.currentFloor,
          this.direction.down,
          this.location.outside
        )
      );
      console.log("Down requests: ", this.downRequests);
    } else {
      this.downRequests.push(downRequest.currentFloor);
      console.log("Down requests: ", this.downRequests);
    }
  }

  run() {
    if (!this.upRequests.length || !this.downRequests.length) {
      this.processRequests();
    }

    console.log("Finished all requests.");
    this.currentDirection = this.direction.idle;
  }

  processRequests() {
    console.log("Current direction: ", this.currentDirection);
    if (this.currentDirection === this.direction.up || this.currentDirection === this.direction.idle) {
      this.processUpRequest();
      this.processDownRequest();
    } else {
      this.processDownRequest();
      this.processUpRequest();
    }
  }

  processUpRequest(){
    if (this.upRequests.length) {
      let upRequest = this.upRequests.shift();
      this.currentFloor = upRequest.desiredFloor;
      console.log(`Arrived at ${this.currentFloor}!`)
    }

    if (this.downRequests.length) {
      this.currentDirection = this.direction.down;
    } else {
      this.currentDirection = this.direction.idle;
    }
  }

  processDownRequest() {
    if (this.downRequests.length) {
      let downRequest = this.downRequests.shift();
      this.currentFloor = downRequest.desiredFloor;
      console.log(`Arrived at ${this.currentFloor}!`)
    }

    if (this.upRequests.length) {
      this.currentDirection = this.direction.up;
    } else {
      this.currentDirection = this.direction.idle;
    }
  }
}

module.exports = Elevator;
