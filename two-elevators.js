const Request = require("./passenger");

class TwoElevators {
  upRequests = [];
  downRequests = [];
  testCurrentFloors = [];

  constructor(id, currentFloor) {
    this.id = id;
    this.currentFloor = currentFloor;
    this.direction = "IDLE";
  }

  sendUpRequest(upRequest) {
    if (upRequest.location === "OUT") {
      this.upRequests.push(
        new Request(this.currentFloor, upRequest.currentFloor, "UP", "OUT")
      );
    }
    this.upRequests.push(upRequest);
    this.upRequests.sort((a, b) => a.desiredFloor - b.desiredFloor);
  }

  sendDownRequest(downRequest) {
    if (downRequest.location === "OUT") {
      this.downRequests.push(
        new Request(this.currentFloor, downRequest.currentFloor, "DOWN", "OUT")
      );
    }
    this.downRequests.push(downRequest);
    this.downRequests.sort((a, b) => b.desiredFloor - a.desiredFloor);
  }

  run() {
    if (this.upRequests.length || this.downRequests.length) {
      this.processRequests();
    }

    console.log("Finished all requests.");
    this.direction = "IDLE";
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
      this.testCurrentFloors.push(this.currentFloor);
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
      this.testCurrentFloors.push(this.currentFloor);
      console.log(`Arrived at ${this.currentFloor}!`);
    }

    if (this.upRequests.length) {
      this.direction = "UP";
    } else {
      this.direction = "IDLE";
    }
  }
}

module.exports = TwoElevators;

const elevator1 = new TwoElevators(1, 4);
const elevator2 = new TwoElevators(2, 7);

const requestFrom3 = new Request(3, 2, "DOWN", "OUT");
const requestFrom10 = new Request(10, 1, "DOWN", "OUT");

const elevators = [elevator1, elevator2];

const getClosestElevator = (elevators, testRequest) => {
    elevators.map((elevator) => {
        elevator.distance = Math.abs(elevator.currentFloor - testRequest.currentFloor)
    })

    let closestElevator = elevators.reduce((prev, current) => {
        return prev.distance < current.distance ? prev : current;
    })

    return closestElevator;
}

console.log(getClosestElevator(elevators, requestFrom3))
console.log(getClosestElevator(elevators, requestFrom10))

// STILL NEED TO CHECK DIRECTION



