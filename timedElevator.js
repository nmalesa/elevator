class Elevator {
  upRequests = [];
  downRequests = [];
  stops = [];

  constructor(currentFloor, maxFloor) {
    this.currentFloor = currentFloor;
    this.maxFloor = maxFloor;
  }


   /**
   * Determines direction elevator should travel based on relationship of current floor to destination
   */
  getDirection(stop) {
    if (stop > this.currentFloor) {
      return "UP";
    } else if (stop < this.currentFloor) {
      return "DOWN";
    } else {
      return "STOPPED";
    }
  }


  /**
   * Receives requests from passengers traveling up and sorts them in ascending order by destination
   *
   * @param {Request} request - The request from a passenger traveling up
   */
  getUpRequests(request) {
    if (request.location === "OUT") {
      this.upRequests.push(request.currentFloor);
    } else if (request.location === "IN") {
      this.upRequests.push(request.destination);
    }

    this.upRequests.sort((a, b) => a - b);
  }

  /**
   * Receives requests from passengers traveling down and sorts them in descending order by destination
   *
   * @param {Request} request - The request from a passenger traveling down
   */
   getDownRequests(downRequest) {
    if (downRequest.location === "OUT") {
      this.downRequests.push(downRequest.currentFloor);
    } else if (downRequest.location === "IN") {
      this.downRequests.push(downRequest.destination);
    }

    this.downRequests.sort((a, b) => b - a);
  }

  /**
   * Travels to all given destinations in both queues
   */
  travel() {
    if (this.upRequests.length) {
      this.travelUp();
    } else if (this.downRequests.length) {
      this.travelDown();
    }
  }

   /**
   * Travels to all given destinations in upRequeusts queue by one floor at a time
   */
  travelUp() {
    if (
      this.getDirection(this.upRequests[0]) === "UP" ||
      this.getDirection(this.upRequests[0]) === "STOPPED"
    ) {
      this.handlePassengersGoingUp();

      if (this.currentFloor === this.maxFloor) {
        this.currentFloor = this.maxFloor;
      } else {
        this.currentFloor++;
      }
    } else if (this.getDirection(this.upRequests[0]) === "DOWN") {
      this.handlePassengersGoingUp();

      if (this.currentFloor === 1) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }
    }
  }

  /**
   * Travels to all given destinations in downRequeusts queue by one floor at a time
   */
  travelDown() {
    if (this.getDirection(this.downRequests[0]) === "UP") {
      this.handlePassengersGoingDown();

      console.log("I am hit.")
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

      if (this.currentFloor === 1) {
        this.currentFloor = 1;
      } else {
        this.currentFloor--;
      }
    }
  }

  /**
   * Allows passengers traveling up to disembark at destination
   */
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
