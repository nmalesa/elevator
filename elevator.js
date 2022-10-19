// Chose to use a class so that we can instantiate multiple instances of elevators doing different activities
class Elevator {
  // Elevator data (e.g., for mulitple elevators) 
  constructor(destinationQueue) {
    // Current destination queue (i.e., the floor numbers the elevator is scheduled to go to)
    this.destinationQueue = destinationQueue;
  }

  goToFloor() {
    // Queue the elevator to go to specified floor number.  
    // If you specifify true as second argument, the elevator will go to that floor directly, and then go to any other queued floors.
  }

  currentFloor() {
    // Gets the floor number that the elevator is currently on.
  }

  goingUpIndicator() {
    // Gets or sets the going up indicator, which will affect passenger behavior when stopping at floors
  }

  goingDownIndicator() {
    // Gets or sets the going down indicator, which will affect passenger behavior when stopping at floors
  }

  destinationDirection() {
    // Gets the direction the elevator is currently going to move toward (e.g., up or down)
  }

  checkDestinationQueue() {
    // Checks the destination queue for any new destinations to go to
  }
  
  getPressedFloors() {
    // Gets the currently pressed floor numbers as an array
  }

  floorButtonPressed(floorNum) {
    // Triggered when a passenger has pressed a button inside the elevator
  }
}
