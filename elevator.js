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
      this.downRequests.push(downRequest.currentFloor);
      console.log("Down requests: ", this.downRequests);
    }

    this.downRequests.push(downRequest.currentFloor);
    console.log("Down requests: ", this.downRequests);
  }
}

module.exports = Elevator;
