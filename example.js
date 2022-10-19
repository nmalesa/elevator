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


// CURRENT LOGIC WORKS FOR GIVEN SCENARIO

// NEW SCENARIO TO TEST
// Elevator at 1
// Request at 6 to go up to 10
// Request at 8 to go up to 12

// NEW SCENARIO TO TEST - MULTIPLE PASSENGERS ENTERING MULTIPLE DESTINATIONS

// NEED TO TEST STARTING AT TOP FLOOR

// Elevator is at floor 1
elevator.currentFloor = 10;

elevator.getDestination(7, "down");
elevator.getDestination(3, "down");
elevator.travel();
elevator.handlePassengers();


console.log("Current floor: ", elevator.currentFloor);

elevator.getDestination(1);

elevator.travel();
elevator.handlePassengers();

console.log("Current floor: ", elevator.currentFloor);

elevator.getDestination(1);

elevator.travel();
elevator.handlePassengers();

console.log("Current floor: ", elevator.currentFloor);



