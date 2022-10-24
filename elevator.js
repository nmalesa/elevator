const Passenger = require("./passenger");

class Elevator {
  passengersGoingUp = [];
  passengersGoingDown = [];
  testCurrentFloors = [];
  direction = "IDLE";
  time = 0;

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  //   T0 up request on 8
  // T1 up request on 3
  // When elevator stops at 8, request made for 10
  // When elevator stops at 3, request made for 5

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
    // if (passenger.location === "OUT") {
    //   this.passengersGoingDown.push(
    //     new Passenger(this.currentFloor, passenger.currentFloor, "DOWN", "OUT")
    //   );
    // }
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

  travelOneFloor() {
    if (this.passengersGoingUp.length || this.passengersGoingDown.length) {
      this.transportPassengers();
      this.currentFloor++;
      this.time++;
      console.log('Number of passengers: ', this.passengersGoingUp.length)
    } else {
      console.log("Transported all passengers!");
      this.direction = "IDLE";
    }

    console.log("Time: ", this.time);
    console.log("Current Floor: ", this.currentFloor);
  }

  /**
   * Transports passengers traveling up before transporting passengers traveling down
   */
  transportPassengers() {
    if (this.direction === "UP" || this.direction === "IDLE") {
      this.testHandlePassengersGoingUp();
      this.handlePassengersGoingDown();
    } else {
      this.handlePassengersGoingDown();
      this.handlePassengersGoingUp();
    }
  }

  testHandlePassengersGoingUp() {
    if (this.currentFloor === this.passengersGoingUp[0].destination) {
      let exitingPassenger = this.passengersGoingUp.shift();
      this.testCurrentFloors.push(exitingPassenger.destination);
      console.log("Queue: ", this.testCurrentFloors)
      console.log(`Arrived at Floor ${exitingPassenger.destination}!`);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.  Going up!`)
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
