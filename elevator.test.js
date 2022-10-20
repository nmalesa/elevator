const Elevator = require('./elevator')
const Passenger = require('./passenger')

let elevator = new Elevator;

beforeEach(() => {
    elevator.testCurrentFloors = [];
})

test('handles passengers going down', () => {
    elevator.getPassengersGoingDown(new Passenger(3, 2, "DOWN", "OUT"));
    elevator.getPassengersGoingDown(new Passenger(10, 1, "DOWN", "OUT"));
    elevator.travel();
    expect(elevator.testCurrentFloors).toEqual([ 10, 3, 2, 1 ]);
    expect(elevator.currentFloor).toBe(1);
})

test('handles multiple passengers going up', () => {
    elevator.getPassengersGoingUp(new Passenger(4, 6, "UP", "OUT"));
    elevator.getPassengersGoingUp(new Passenger(8, 10, "UP", "OUT"));
    elevator.travel();
    expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 10]);
    expect(elevator.currentFloor).toBe(10);
})

test('handles additional passenger inside elevator going down', () => {
    elevator.getPassengersGoingDown(new Passenger(3, 2, "DOWN", "OUT"));
    elevator.getPassengersGoingDown(new Passenger(10, 1, "DOWN", "OUT"));
    elevator.getPassengersGoingDown(new Passenger(10, 7, "DOWN", "IN"));
    elevator.travel();
    expect(elevator.testCurrentFloors).toEqual([ 10, 7, 3, 2, 1 ]);
    expect(elevator.currentFloor).toBe(1);
})

test('handles additional passenger inside elevator going up', () => {
    elevator.getPassengersGoingUp(new Passenger(4, 6, "UP", "OUT"));
    elevator.getPassengersGoingUp(new Passenger(8, 10, "UP", "OUT"));
    elevator.getPassengersGoingUp(new Passenger(8, 9, "UP", "IN"));
    elevator.travel();
    expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 9, 10]);
    expect(elevator.currentFloor).toBe(10);
})

test('handles passengers going in multiple directions', () => {
    elevator.getPassengersGoingUp(new Passenger(3, 7, "UP", "OUT"));
    elevator.getPassengersGoingDown(new Passenger(6, 1, "DOWN", "OUT"));
    elevator.getPassengersGoingDown(new Passenger(6, 3, "DOWN", "IN"));
    elevator.travel();
    expect(elevator.testCurrentFloors).toEqual([3, 7, 6, 3, 1]);
    expect(elevator.currentFloor).toBe(1);
})