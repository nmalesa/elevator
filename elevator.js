class Elevator {
  direction = "";
  destinations = [];

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  }

  // How to manipulate the queue
  // All up requests finish before starting down requests
  // Try having an up queue and down queue


  

  getDestinationFromOutsideElevator(floor, button) {
    this.getDirectionToFloor(floor);

    if (button === "up") {
      this.upRequests.push(floor);
    } else if (button === "down") {
      this.downRequests.push(floor);
    }
  }

  getDestinationFromInsideElevator(floor) {
    this.getDirectionToFloor(floor);

    if (this.direction === "up") {
      this.upRequests.push(floor);
    } else if (this.direction === "down") {
      this.downRequests.push(floor);
    }
    console.log("Up Queue: ", this.upRequests)
    console.log("Down Queue: ", this.downRequests)
  }

  // getDestination(floor, button) {
  //   this.getDirection(floor);

  //   // HANDLES SCENARIO WITH MULTIPLE FLOORS IN SAME DIRECTION
  //   if (this.destinations.length) {
  //     if (button === "up" && floor > this.destinations[0]) {
  //       this.destinations.push(floor);
  //     } else if (button === "down" && floor < this.destinations[0]) {
  //       this.destinations.unshift(floor);
  //     } else {
  //       this.destinations.push(floor)
  //     }
  //   } else {
  //     this.destinations.push(floor);
  //   }
  //   console.log("Queue: ", this.destinations);

  //   // HANDLES GIVEN SCENARIO
  //   // if (this.destinations.length) {
  //   //   if (this.direction === "up" && floor > this.destinations[0]) {
  //   //     this.destinations.unshift(floor);
  //   //   } else if (this.direction === "down" && floor > this.destinations[0]) {
  //   //     this.destinations.unshift(floor);
  //   //   } else {
  //   //     this.destinations.push(floor)
  //   //   }
  //   // } else {
  //   //   this.destinations.push(floor);
  //   // }
  //   // console.log("Queue: ", this.destinations);
  // }

  travel() {
    if (this.direction === "up") {
      for (let i = this.currentFloor; i < this.destinations[0]; i++) {
        this.currentFloor++;
      }
    } else if (this.direction === "down") {
      for (let i = this.currentFloor; i > this.destinations[0]; i--) {
        this.currentFloor--;
      }
    }
  }

  handlePassengers() {
    this.destinations.shift();
    console.log("Queue: ", this.destinations);
  }

  getDirectionToFloor(floor) {
    return floor > this.currentFloor ? this.direction = "up" : this.direction = "down"
  }
}

module.exports = Elevator;

// getDestination(floor) {
//   this.destinations.push(floor);
// }

// goToFloor() {
//   // TO DO:  FIGURE OUT HOW TO HANDLE THIS PROMISE
//   let travelTime = new Promise((resolve, reject) => {
//     resolve(this.travel());
//   });
//   travelTime.then(() => console.log(`Arrived at Floor ${this.destinations[0]}`));
//   this.currentFloor = this.destinations[0];
//   this.destinations.shift();
//   // console.log("Time: ", this.time);
// }

// travel() {
//   this.getDirection();
//   this.time++;

//   if (this.direction === "up") {
//     console.log("Going up!");
//     for (let i = this.currentFloor; i < this.destinations[0]; i++) {

//     }
//   } else {
//     console.log("Going down!");
//     for (let i = this.currentFloor; i >= this.destinations[0]; i--) {

//     }
//   }
// }

// pressUpButton() {
//   this.upButtonPressed = true;
//   console.log("Up Button: ", this.upButtonPressed)
// }

// pressDownButton() {
//   this.downButtonPressed = true;
//   console.log("Down Button: ", this.downButtonPressed)
// }
