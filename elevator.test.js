const Elevator = require('./elevator')

let elevator = new Elevator;

/*
USE CASE 1
    - Elevator is at the lobby (floor 1)
    - At T0, down button is pressed on floor 3 with a passenger wanting to go to 2
    - At T1, down button is pressed on floor 10 with a passenger wanting to go to the lobby
*/

test('handles Use Case 1', () => {
    elevator.currentFloor = 1;

    elevator.getDestination(3);
    elevator.getDestination(10);
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(1);
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(2);
    elevator.travel();
    elevator.handlePassengers();

    expect(elevator.currentFloor).toBe(1);
})