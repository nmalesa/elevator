const Request = require("./request");

class Elevator {
  upRequests = [];
  downRequests = [];

  direction = {
    up: "UP",
    down: "DOWN",
    idle: "IDLE",
  };

  location = {
    inside: "INSIDE_ELEVATOR",
    outside: "OUTSIDE_ELEVATOR",
  };

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

  }
}

module.exports = Elevator;
