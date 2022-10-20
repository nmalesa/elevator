const Elevator = require('./elevator')

let elevator = new Elevator;

test('handles multiple requests to go down when elevator starts in lobby', () => {
    // Elevator starts at the lobby
    elevator.currentFloor = 1;
    // Down button is pressed on floor 3
    elevator.getDestination(3);
    // Down button is pressed on floor 10 with a passenger
    elevator.getDestination(10);
    // Elevator travels to floor 10, picks up passenger, and receives destination
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(1);
    expect(elevator.currentFloor).toBe(10);
    // Elevator travels to floor 3, picks up passenger, and receives destination
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(2);
    expect(elevator.currentFloor).toBe(3);
    // Elevator travels to floor 2 and drops off passenger
    elevator.travel();
    elevator.handlePassengers();
    expect(elevator.currentFloor).toBe(2);
    // Elevator travels to lobby and drops off passenger
    elevator.travel();
    elevator.handlePassengers();
    expect(elevator.currentFloor).toBe(1);
})

test('handles multiple requests to go up when elevator starts in lobby', () => {
    // Elevator starts at the lobby
    elevator.currentFloor = 1;
    // Up button is pressed on floor 6
    elevator.getDestination(6);
    // Up button is pressed on floor 4
    elevator.getDestination(4);
    // Elevator travels to floor 4, picks up passenger, and receives destination
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(8);
    expect(elevator.currentFloor).toBe(4);
    // Elevator travels to floor 6, picks up passenger, and receives destination
    elevator.travel();
    elevator.handlePassengers();
    elevator.getDestination(10);
    expect(elevator.currentFloor).toBe(6);
    // Elevator travels to floor 8 and drops off passenger
    elevator.travel();
    elevator.handlePassengers();
    expect(elevator.currentFloor).toBe(8);
    // Elevator travels to floor 10 and drops off passenger
    elevator.travel();
    elevator.handlePassengers();
    expect(elevator.currentFloor).toBe(10);
})