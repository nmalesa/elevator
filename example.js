const Elevator = require('./elevator')
const Request = require('./request')

// const direction = {
//     up: "UP",
//     down: "DOWN",
//     idle: "IDLE",
// };

// const location = {
//     inside: "INSIDE_ELEVATOR",
//     outside: "OUTSIDE_ELEVATOR",
// };

let elevator = new Elevator(1);

let requestFrom3 = new Request(3, 2, "DOWN", "OUTSIDE_ELEVATOR")
let requestFrom10 = new Request(10, 1, "DOWN", "OUTSIDE_ELEVATOR");

elevator.sendDownRequest(requestFrom3);
elevator.sendDownRequest(requestFrom10);
elevator.run();