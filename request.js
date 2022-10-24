class Request {
    constructor(currentFloor, destination, direction, location) {
      this.currentFloor = currentFloor;
      this.destination = destination;
      this.direction = direction;
      this.location = location;
    }
  }
  
  module.exports = Request;