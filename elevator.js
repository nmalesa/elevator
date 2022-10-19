// Chose to use a class so that we can instantiate multiple instances of elevators doing different activities
class Elevator {
  // Elevator data (e.g., for mulitple elevators)

  constructor(currentFloor) {
    this.currentFloor = currentFloor;
    this.destinations = [];
    this.time = 0;
  }

  // Queues elevator to go to given floor number.
  goToFloor(floor) {
    this.destinations.push(floor);
  }

  printFloorTest(n) {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i)
      }, i * 1000);
    }
  }

  // Gets the direction the elevator is currently going to move toward (e.g., up or down)
  getDirection() {
    if (
      this.destinations.length === 0 ||
      this.destinations[0] === this.currentFloor
    )
      return "idle";
    else return this.destinations[0] > this.currentFloor ? "up" : "down";
  }

  getDirectionToFloor(floor) {
    if (floor === this.currentFloor) return "idle"
    else return (floor > this.currentFloor) ? "up" : "down"
  }

  // Calculates the time required to go to a specific floor
  getTimeToFloor(floor) {
    this.time = Math.abs(this.currentFloor - floor);
    return this.time;
  }

  travel() {
    setInterval()
  }


}

module.exports = Elevator;
