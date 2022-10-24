const Request = require("./request");

class Elevator {
  requestsGoingUp = [];
  requestsGoingDown = [];
  stops = [];
  direction = "IDLE";
  time = 0;
  passengers = 0;

  constructor(currentFloor, maxFloor) {
    this.currentFloor = currentFloor;
    this.maxFloor = maxFloor;
  }

  getRequestsGoingUp(request) {
    if (request.location === "OUT") {
      this.requestsGoingUp.push(request.currentFloor);
    } else if (request.location === "IN") {
      this.requestsGoingUp.push(request.destination);
      this.passengers++;
    }

    this.requestsGoingUp.sort((a, b) => a - b);
  }

  getDirection(nextStop) {
    console.log("Next stop: ", nextStop)
    console.log("Current floor: ", this.currentFloor)
    return nextStop > this.currentFloor
      ? (this.direction = "UP")
      : (this.direction = "DOWN");
  }

  travel() {
    if (
      this.getRequestsGoingUp.length &&
      this.getDirection(this.getRequestsGoingUp[0]) === "UP"
    ) {
      this.handlePassengersGoingUp();
      this.time++;
      this.currentFloor++;
      console.log("Up and up")
      console.log("Direction: ", this.getDirection(this.getRequestsGoingUp[0]))
      
    } else if (
      this.getRequestsGoingUp.length &&
      this.getDirection(this.getRequestsGoingUp[0]) === "DOWN"
    ) {
      this.handlePassengersGoingUp();
      this.time++;
      this.currentFloor--;
      console.log("Up and down")
      console.log("Direction: ", this.getDirection(this.getRequestsGoingUp[0]))
      console.log("First index: ", this.getRequestsGoingUp[0])
    } else if (
      this.getRequestsGoingDown.length &&
      this.getDirection(this.getRequestsGoingDown[0]) === "DOWN"
    ) {
      this.handlePassengersGoingDown();
      this.time++;
      this.currentFloor--;
      console.log("Down and down")
    } else if (
      this.getRequestsGoingDown.length &&
      this.getDirection(this.getRequestsGoingDown[0]) === "UP"
    ) {
      this.handlePassengersGoingDown();
      this.time++;
      this.currentFloor++;
      console.log("Down and up")
    } else {
      console.log("Transported all passengers!");
      this.direction = "IDLE";
      this.time = 0;
    }
  }

  travelOneFloorUp() {
    if (this.requestsGoingUp.length) {
      this.handlePassengersGoingUp();
      this.time++;
      this.currentFloor++;
    } else {
      console.log("Transported all passengers!");
      this.direction = "IDLE";
      this.time = 0;
    }
  }

  getRequestsGoingDown(request) {
    if (request.location === "OUT") {
      this.requestsGoingDown.push(request.currentFloor);
    } else if (request.location === "IN") {
      this.requestsGoingDown.push(request.destination);
      this.passengers++;
    }

    this.requestsGoingUp.sort((a, b) => b - a);
  }

  travelOneFloorUp() {
    if (this.requestsGoingUp.length) {
      this.handlePassengersGoingUp();
      this.time++;
      this.currentFloor++;
    } else {
      console.log("Transported all passengers!");
      this.direction = "IDLE";
      this.time = 0;
    }
  }

  travelOneFloorDown() {
    if (this.requestsGoingDown.length) {
      this.handlePassengersGoingDown();
      this.time++;
      this.currentFloor--;
    } else {
      console.log("Transported all passengers!");
      this.direction = "IDLE";
      this.time = 0;
    }
  }

  handlePassengersGoingUp() {
    if (this.currentFloor === this.requestsGoingUp[0]) {
      let stop = this.requestsGoingUp.shift();
      this.stops.push(stop);
      console.log(`Arrived at Floor ${stop}!`);
      console.log("Queue: ", this.requestsGoingUp);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.  Going up!`);
    }

    // if (this.passengersGoingDown.length) {
    //     this.direction = "DOWN";
    //   } else {
    //     this.direciton = "IDLE";
    //   }
  }

  /**
   * Allows passengers traveling down to disembark at destination
   */
  handlePassengersGoingDown() {
    if (this.currentFloor === this.requestsGoingDown[0]) {
      let stop = this.requestsGoingDown.shift();
      this.stops.push(stop);
      console.log(`Arrived at Floor ${stop}!`);
      console.log("Queue: ", this.requestsGoingDown);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.  Going down!`);
    }

    // if (this.passengersGoingUp.length) {
    //   this.direction = "UP";
    // } else {
    //   this.direction = "IDLE";
    // }
  }
}

module.exports = Elevator;
