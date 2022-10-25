const Request = require("./request");

class Elevator {
  upRequests = [];
  downRequests = [];
  stops = [];
  direction = "IDLE";
  time = 0;
  passengers = 0;

  constructor(currentFloor, maxFloor) {
    this.currentFloor = currentFloor;
    this.maxFloor = maxFloor;
  }

  getUpRequests(request) {
    if (request.location === "OUT") {
      this.upRequests.push(request.currentFloor);
    } else if (request.location === "IN") {
      this.upRequests.push(request.destination);
      //   this.passengers++;
    }

    this.upRequests.sort((a, b) => a - b);
    // console.log("Queue from getRequeusts: ", this.upRequests)
  }

  getDirection(stop) {
    if (stop > this.currentFloor) {
      return "UP";
    } else if (stop < this.currentFloor) {
      return "DOWN";
    } else {
      return "STOPPED";
    }
  }

  travel() {
    if (this.upRequests.length) {
      this.travelUp();
    } else if (this.downRequests.length) {
      this.travelDown();
    }
  }

  travelUp() {
    if (
      this.getDirection(this.upRequests[0]) === "UP" ||
      this.getDirection(this.upRequests[0]) === "STOPPED"
    ) {
      this.handlePassengersGoingUp();
      this.time++;

      if (this.currentFloor === this.maxFloor) {
        this.currentFloor = this.maxFloor;
      } else {
        this.currentFloor++;
      }
    } else if (this.getDirection(this.upRequests[0]) === "DOWN") {
      this.handlePassengersGoingUp();
      this.time++;

      if (!this.upRequests.length) {
        this.currentFloor = this.currentFloor;
      } else if (this.currentFloor === 1) {
        this.currentFloor++
      } else {
        this.currentFloor--;
      }

      if (this.currentFloor === 1) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }
    }
  }

  travelDown() {
    if (this.getDirection(this.downRequests[0]) === "UP") {
      this.handlePassengersGoingDown();
      this.time++;

      if (this.currentFloor === this.maxFloor) {
        this.currentFloor--;
      } else {
        this.currentFloor++;
      }
    } else if (
      this.getDirection(this.downRequests[0]) === "DOWN" ||
      this.getDirection(this.downRequests[0]) === "STOPPED"
    ) {
      this.handlePassengersGoingDown();
      this.time++;

      if (this.currentFloor === 1) {
        this.currentFloor = 1;
      } else {
        this.currentFloor--;
      }
    }
  }

  getDownRequests(downRequest) {
    if (downRequest.location === "OUT") {
      this.downRequests.push(downRequest.currentFloor);
    } else if (downRequest.location === "IN") {
      this.downRequests.push(downRequest.destination);
    }

    this.downRequests.sort((a, b) => b - a);
  }

  handlePassengersGoingUp() {
    if (this.currentFloor === this.upRequests[0]) {
      let stop = this.upRequests.shift();
      this.stops.push(stop);
      console.log(`Arrived at Floor ${stop}!`);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.`);
    }
  }

  /**
   * Allows passengers traveling down to disembark at destination
   */
  handlePassengersGoingDown() {
    if (this.currentFloor === this.downRequests[0]) {
      let stop = this.downRequests.shift();
      this.stops.push(stop);
      console.log(`Arrived at Floor ${stop}!`);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.`);
    }
  }
}

module.exports = Elevator;
