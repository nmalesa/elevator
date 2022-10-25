const Passenger = require("./passenger");

class Elevator {
  passengersGoingUp = [];
  passengersGoingDown = [];
  testCurrentFloors = [];
  direction = "IDLE";

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  /**
   * Retrieves passengers traveling up and sorts them in ascending order by destination
   *
   * @param {Passenger} passenger - The passenger traveling up
   */
  getPassengersGoingUp(passenger) {
    if (passenger.location === "OUT") {
      this.passengersGoingUp.push(
        new Passenger(this.currentFloor, passenger.currentFloor, "UP", "OUT")
      );
    }
    this.passengersGoingUp.push(passenger);
    this.passengersGoingUp.sort((a, b) => a.destination - b.destination);
  }

  /**
   * Retrieves passengers traveling down and sorts them in descending order by destination
   *
   * @param {Passenger} passenger - The passenger traveling down
   */
  getPassengersGoingDown(passenger) {
    if (passenger.location === "OUT") {
      this.passengersGoingDown.push(
        new Passenger(this.currentFloor, passenger.currentFloor, "DOWN", "OUT")
      );
    }
    this.passengersGoingDown.push(passenger);
    this.passengersGoingDown.sort((a, b) => b.destination - a.destination);
  }

  /**
   * Travels to all given destinations in both queues
   */
  travel() {
    if (this.passengersGoingUp.length || this.passengersGoingDown.length) {
      this.transportPassengers();
    }

    console.log("Transported all passengers!");
    this.direction = "IDLE";
  }

  /**
   * Transports passengers traveling up before transporting passengers traveling down
   */
  transportPassengers() {
    if (this.direction === "UP" || this.direction === "IDLE") {
      this.handlePassengersGoingUp();
      this.handlePassengersGoingDown();
    } else {
      this.handlePassengersGoingDown();
      this.handlePassengersGoingUp();
    }
  }

  /**
   * Allows passengers traveling up to disembark at destination
   */
  handlePassengersGoingUp() {
    while (this.passengersGoingUp.length) {
      let exitingPassenger = this.passengersGoingUp.shift();
      this.currentFloor = exitingPassenger.destination;
      this.testCurrentFloors.push(this.currentFloor);
      console.log(`Arrived at Floor ${this.currentFloor}!`);
    }

    if (this.passengersGoingDown.length) {
      this.direction = "DOWN";
    } else {
      this.direciton = "IDLE";
    }
  }

  /**
   * Allows passengers traveling down to disembark at destination
   */
  handlePassengersGoingDown() {
    while (this.passengersGoingDown.length) {
      let exitingPassenger = this.passengersGoingDown.shift();
      this.currentFloor = exitingPassenger.destination;
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
