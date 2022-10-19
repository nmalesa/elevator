const Elevator = require('./elevator')
const Floor = require('./floor')

let elevator = new Elevator;
let thirdFloor = new Floor(3, false, false);

// Down button pressed on floor three with a passenger wanting to go to floor 2

// Set the current floor where the elevator is located
elevator.currentFloor = 1;

// Get destination
elevator.goToFloor(3);

elevator.printFloorTest(3);


