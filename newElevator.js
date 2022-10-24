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

  //   getDirection(nextStop) {
  //     console.log("Next stop: ", nextStop)
  //     console.log("Current floor: ", this.currentFloor)
  //     return nextStop > this.currentFloor
  //       ? (this.direction = "UP")
  //       : (this.direction = "DOWN");
  //   }

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
      this.upRequests.length &&
      (this.getDirection(this.upRequests[0]) === "UP" ||
        this.getDirection(this.upRequests[0]) === "STOPPED")
    ) {
      this.handlePassengersGoingUp();
      this.time++;

      if (this.currentFloor === this.maxFloor) {
        this.currentFloor = this.maxFloor;
      } else {
        this.currentFloor++;
      }
    } else if (
      this.upRequests.length &&
      this.getDirection(this.upRequests[0]) === "DOWN"
    ) {
      this.handlePassengersGoingUp();
      this.time++;

      if (this.currentFloor === 1) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }
    }
  }

    travelDown() {
      if (
        this.downRequests.length &&
        this.getDirection(this.downRequests[0]) === "UP"
      ) {
        this.handlePassengersGoingDown();
        this.time++;

        if (this.currentFloor === this.maxFloor) {
          this.currentFloor--;
        } else {
          this.currentFloor++;
        }
      } else if (
        (this.downRequests.length &&
          this.getDirection(this.downRequests[0]) === "DOWN") ||
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

  //   travel() {
  //     this.getDirection(this.upRequests[0]);

  // if (this.currentFloor === this.maxFloor) {
  //   this.direction === "DOWN";
  // }

  // if (
  //   (this.upRequests.length && this.direction === "UP") ||
  //   this.direction === "IDLE"
  // ) {
  //   this.handlePassengersGoingUp();
  //   this.currentFloor++;
  //   this.time++;
  // } else {
  //   console.log("Reached max floor.  Going down.");
  //   this.direction === "DOWN";
  //   console.log("Direction: ", this.direction);
  // }
  //   }

  //   travel() {
  //     if (
  //       this.getRequestsGoingUp.length &&
  //       this.getDirection(this.getRequestsGoingUp[0]) === "UP"
  //     ) {
  //       this.handlePassengersGoingUp();
  //       this.time++;
  //       this.currentFloor++;
  //       console.log("Up and up")
  //       console.log("Direction: ", this.getDirection(this.getRequestsGoingUp[0]))

  //     } else if (
  //       this.getRequestsGoingUp.length &&
  //       this.getDirection(this.getRequestsGoingUp[0]) === "DOWN"
  //     ) {
  //       this.handlePassengersGoingUp();
  //       this.time++;
  //       this.currentFloor--;
  //       console.log("Up and down")
  //       console.log("Direction: ", this.getDirection(this.getRequestsGoingUp[0]))
  //       console.log("First index: ", this.getRequestsGoingUp[0])
  //     } else if (
  //       this.getRequestsGoingDown.length &&
  //       this.getDirection(this.getRequestsGoingDown[0]) === "DOWN"
  //     ) {
  //       this.handlePassengersGoingDown();
  //       this.time++;
  //       this.currentFloor--;
  //       console.log("Down and down")
  //     } else if (
  //       this.getRequestsGoingDown.length &&
  //       this.getDirection(this.getRequestsGoingDown[0]) === "UP"
  //     ) {
  //       this.handlePassengersGoingDown();
  //       this.time++;
  //       this.currentFloor++;
  //       console.log("Down and up")
  //     } else {
  //       console.log("Transported all passengers!");
  //       this.direction = "IDLE";
  //       this.time = 0;
  //     }
  //   }

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

  getDownRequests(downRequest) {
    if (downRequest.location === "OUT") {
      this.downRequests.push(downRequest.currentFloor);
    } else if (downRequest.location === "IN") {
      this.downRequests.push(downRequest.destination);
      //   this.passengers++;
    }

    this.downRequests.sort((a, b) => b - a);
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
    if (this.currentFloor === this.upRequests[0]) {
      let stop = this.upRequests.shift();
      this.stops.push(stop);
      console.log(`Arrived at Floor ${stop}!`);
    //   console.log("Queue: ", this.upRequests);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.`);
      console.log("Queue: ", this.upRequests);
    }

    if (!this.upRequests.length && this.downRequests.length) {
      this.direction = "DOWN";
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
      //   console.log("Queue: ", this.downRequests);
    } else {
      console.log(`Currently at Floor ${this.currentFloor}.`);
    }

    if (!this.downRequests.length && this.upRequests.length) {
      this.direction = "UP";
    }
  }
}

module.exports = Elevator;
