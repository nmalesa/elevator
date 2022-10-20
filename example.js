const Elevator = require('./elevator')

let elevator = new Elevator;

// Elevator is at floor 1
// Passenger on floor 3 makes a request
// 3 is added to elevator queue
// Elevator checks direction and assigns an up or down variable. (in this case up)
// Elevator begins traveling.  Time increments by one per each floor.  Current floor increments by one per each floor.
// At T1 (first floor), Passenger on floor 10 makes a request
// Elevator checks to see if:
    // If elevator direction is equal to down and elevator floor is greater than request floor
// If queue is empty, reset time to 0;

elevator.currentFloor = 1;

elevator.getDestinationFromOutsideElevator(3, "down");
elevator.getDestinationFromOutsideElevator(10, "down");

elevator.travel();

elevator.getDestinationFromInsideElevator(1);

console.log("Current floor: ", elevator.currentFloor);

