const Elevator = require('./elevator')
const Request = require('./passenger')
const ExpressElevator = require('./express-elevator')
const MaxLoad = require('./max-load')
const TwoElevators = require('./two-elevators')

const elevator1 = new TwoElevators(1, 4);
const elevator2 = new TwoElevators(2, 7);

const requestFrom3 = new Request(3, 2, "DOWN", "OUT");
const requestFrom10 = new Request(10, 1, "DOWN", "OUT");

const elevators = [elevator1, elevator2];

const getClosestElevator = (elevators, testRequest) => {
    elevators.map((elevator) => {
        elevator.distance = Math.abs(elevator.currentFloor - testRequest.currentFloor)
    })

    let closestElevator = elevators.reduce((prev, current) => {
        return prev.distance < current.distance ? prev : current;
    })

    return closestElevator;
}

console.log(getClosestElevator(elevators, requestFrom3))
console.log(getClosestElevator(elevators, requestFrom10))

// STILL NEED TO CHECK DIRECTION



