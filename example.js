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

let requestFromSix = new Request(6, 10, direction.up, location.outside);

elevator.sendUpRequest(requestFromSix);


