const Passenger = require("./passenger");

class Elevator {
  passengersGoingUp = [];
  passengersGoingDown = [];
  testCurrentFloors = [];
  direction = "IDLE";

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  getPassengersGoingUp(passenger) {
    if (passenger.location === "OUT") {
      this.passengersGoingUp.push(
        new Passenger(this.currentFloor, passenger.currentFloor, "UP", "OUT")
      );
    }
    this.passengersGoingUp.push(passenger);
    this.passengersGoingUp.sort((a, b) => a.desiredFloor - b.desiredFloor);
  }

  getPassengersGoingDown(passenger) {
    if (passenger.location === "OUT") {
      this.passengersGoingDown.push(
        new Passenger(this.currentFloor, passenger.currentFloor, "DOWN", "OUT")
      );
    }
    this.passengersGoingDown.push(passenger);
    this.passengersGoingDown.sort((a, b) => b.desiredFloor - a.desiredFloor);
  }

  travel() {
    if (this.passengersGoingUp.length || this.passengersGoingDown.length) {
      this.transportPassengers();
    }

    console.log("Transported all passengers!");
    this.direction = "IDLE";
  }

  transportPassengers() {
    if (this.direction === "UP" || this.direction === "IDLE") {
      this.transportPassengersGoingUp();
      this.transportPassengersGoingDown();
    } else {
      this.transportPassengersGoingDown();
      this.transportPassengersGoingUp();
    }
  }

  transportPassengersGoingUp() {
    while (this.passengersGoingUp.length) {
      let exitingPassenger = this.passengersGoingUp.shift();
      this.currentFloor = exitingPassenger.desiredFloor;
      this.testCurrentFloors.push(this.currentFloor);
      console.log(`Arrived at Floor ${this.currentFloor}!`);
    }

    if (this.passengersGoingDown.length) {
      this.direction = "DOWN";
    } else {
      this.direciton = "IDLE";
    }
  }

  transportPassengersGoingDown() {
    while (this.passengersGoingDown.length) {
      let exitingPassenger = this.passengersGoingDown.shift();
      this.currentFloor = exitingPassenger.desiredFloor;
      this.testCurrentFloors.push(this.currentFloor);
      console.log(`Arrived at Floor ${this.currentFloor}!`);
    }

    if (this.passengersGoingUp.length) {
      this.direction = "UP";
    } else {
      this.direction = "IDLE";
    }
  }
}

module.exports = Elevator;
