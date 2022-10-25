const Elevator = require("./newElevator");
const Request = require("./request");

let elevator = new Elevator(1, 10);

beforeEach(() => {
  elevator.stops = [];
});

// test("handles passengers going down", () => {
//   elevator.currentFloor = 1;
//   elevator.getPassengersGoingDown(new Passenger(3, 2, "DOWN", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(10, 1, "DOWN", "OUT"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([10, 3, 2, 1]);
//   expect(elevator.currentFloor).toBe(1);
// });

// test("handles multiple passengers going up", () => {
//   elevator.currentFloor = 1;
//   elevator.getPassengersGoingUp(new Passenger(4, 6, "UP", "OUT"));
//   elevator.getPassengersGoingUp(new Passenger(8, 10, "UP", "OUT"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 10]);
//   expect(elevator.currentFloor).toBe(10);
// });

// test("handles additional passenger inside elevator going down", () => {
//   elevator.currentFloor = 1;
//   elevator.getPassengersGoingDown(new Passenger(3, 2, "DOWN", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(10, 1, "DOWN", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(10, 7, "DOWN", "IN"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([10, 7, 3, 2, 1]);
//   expect(elevator.currentFloor).toBe(1);
// });

// test("handles additional passenger inside elevator going up", () => {
//   elevator.currentFloor = 1;
//   elevator.getPassengersGoingUp(new Passenger(4, 6, "UP", "OUT"));
//   elevator.getPassengersGoingUp(new Passenger(8, 10, "UP", "OUT"));
//   elevator.getPassengersGoingUp(new Passenger(8, 9, "UP", "IN"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([4, 6, 8, 9, 10]);
//   expect(elevator.currentFloor).toBe(10);
// });

// test("handles passengers going in multiple directions", () => {
//   elevator.currentFloor = 1;
//   elevator.getPassengersGoingUp(new Passenger(3, 7, "UP", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(6, 1, "DOWN", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(6, 3, "DOWN", "IN"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([3, 7, 6, 3, 1]);
//   expect(elevator.currentFloor).toBe(1);
// });

// test('handles travel when beginning from a floor other than the lobby', () => {
//   elevator.currentFloor = 6;
//   elevator.getPassengersGoingDown(new Passenger(3, 2, "DOWN", "OUT"));
//   elevator.getPassengersGoingDown(new Passenger(10, 1, "DOWN", "OUT"));
//   elevator.travel();
//   expect(elevator.testCurrentFloors).toEqual([10, 3, 2, 1]);
//   expect(elevator.currentFloor).toBe(1);
// })

// test('two floors', () => {
//   // Array of elevators
//   // Same direction as passenger
//   // Distance from passenger

//   getClosestElevator() {

//   }

//   )
// })

test("handles down requests by time", () => {
    elevator.getDownRequests(new Request(3, null, "OUT"))
    elevator.travel();
    elevator.getDownRequests(new Request(10, null, "OUT"));
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.getDownRequests(new Request(10, 1, "IN"));
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.getDownRequests(new Request(3, 2, "IN"));
    elevator.travel();
    elevator.travel();
    elevator.travel();
    expect(elevator.stops).toEqual([10, 3, 2, 1]);
    expect(elevator.currentFloor).toBe(1);
});

test('handles up requests by time', () => {
    elevator.getUpRequests(new Request(8, null, "OUT"));
    elevator.travel();
    elevator.getUpRequests(new Request(3, null, "OUT"));
    elevator.travel();
    elevator.travel();
    elevator.getUpRequests(new Request(3, 5, "IN"))
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.getUpRequests(new Request(8, 10, "IN"))
    elevator.travel();
    elevator.travel();
    expect(elevator.stops).toEqual([3, 5, 8, 10]);
    expect(elevator.currentFloor).toBe(10);
})

test('handles both up and down requests by time', () => {
    elevator.getDownRequests(new Request(7, null, "OUT"))
    elevator.travel();
    elevator.getUpRequests(new Request(3, null, "OUT"))
    elevator.travel();
    elevator.travel();
    elevator.getUpRequests(new Request(3, 6, "IN"));
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.getDownRequests(new Request(7, 2, "IN"))
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    elevator.travel();
    expect(elevator.stops).toEqual([3, 6, 7, 2]);
    expect(elevator.currentFloor).toBe(2);
})