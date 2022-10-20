const Elevator = require('./elevator')
const Request = require('./request')

const direction = {
    up: "UP",
    down: "DOWN",
    idle: "IDLE",
};

const location = {
    inside: "INSIDE_ELEVATOR",
    outside: "OUTSIDE_ELEVATOR",
};

let elevator = new Elevator(1);
console.log("Current Floor: ", elevator.currentFloor);

let requestFromSix = new Request(6, 10, direction.up, location.outside);

let requestFromThree = new Request(3, 2, direction.down, location.outside);

// elevator.sendUpRequest(requestFromSix);

elevator.sendDownRequest(requestFromSix);

elevator.run();

