const Elevator = require('./elevator')
const Request = require('./request')

let elevator = new Elevator;

beforeEach(() => {
    elevator.testCurrentFloors = [];
})

test('handles multiple down requests when elevator starts in lobby', () => {
    elevator.currentFloor = 1;
    elevator.sendDownRequest(new Request(3, 2, "DOWN", "OUT"));
    elevator.sendDownRequest(new Request(10, 1, "DOWN", "OUT"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([ 10, 3, 2, 1 ])
})

test('handles multiple up requests when elevator starts in lobby', () => {
    elevator.currentFloor = 1;
    elevator.sendUpRequest(new Request(4, 6, "UP", "OUT"));
    elevator.sendUpRequest(new Request(8, 10, "UP", "OUT"));
    elevator.run();
    expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 10])
})