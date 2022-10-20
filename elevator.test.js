const Elevator = require('./elevator')
const Request = require('./request')

let elevator = new Elevator;

beforeEach(() => {
    elevator.testCurrentFloors = [];
})

test('handles multiple down requests', () => {
    elevator.sendDownRequest(new Request(3, 2, "DOWN", "OUT"));
    elevator.sendDownRequest(new Request(10, 1, "DOWN", "OUT"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([ 10, 3, 2, 1 ]);
    expect(elevator.currentFloor).toBe(1);
})

test('handles multiple up requests', () => {
    elevator.sendUpRequest(new Request(4, 6, "UP", "OUT"));
    elevator.sendUpRequest(new Request(8, 10, "UP", "OUT"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 10]);
    expect(elevator.currentFloor).toBe(10);
})

test('handles down request from inside elevator', () => {
    elevator.sendDownRequest(new Request(3, 2, "DOWN", "OUT"));
    elevator.sendDownRequest(new Request(10, 1, "DOWN", "OUT"));
    elevator.sendDownRequest(new Request(10, 7, "DOWN", "IN"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([ 10, 7, 3, 2, 1 ]);
    expect(elevator.currentFloor).toBe(1);
})

test('handles up request from inside elevator', () => {
    elevator.sendUpRequest(new Request(4, 6, "UP", "OUT"));
    elevator.sendUpRequest(new Request(8, 10, "UP", "OUT"));
    elevator.sendUpRequest(new Request(8, 9, "UP", "IN"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 9, 10]);
    expect(elevator.currentFloor).toBe(10);
})

test('handles requests in multiple directions', () => {
    elevator.sendUpRequest(new Request(3, 7, "UP", "OUT"));
    elevator.sendDownRequest(new Request(6, 1, "DOWN", "OUT"));
    elevator.sendDownRequest(new Request(6, 3, "DOWN", "IN"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([3, 7, 6, 3, 1]);
    expect(elevator.currentFloor).toBe(1);
})