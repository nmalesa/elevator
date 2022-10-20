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

let requestFrom4 = new Request(4, 6, "UP", "OUTSIDE_ELEVATOR");
let requestFrom8 = new Request(8, 10, "UP", "OUTSIDE_ELEVATOR");
let requestFromInside8 = new Request(8, 9, "UP", "INSIDE_ELEVATOR");

elevator.sendDownRequest(requestFrom3);
elevator.sendDownRequest(requestFrom10);
elevator.run();

// elevator.sendUpRequest(requestFrom4);
// elevator.sendUpRequest(requestFrom8);
// elevator.sendUpRequest(requestFromInside8);
// elevator.run();

// ORDERING FOR DOWN REQUESTS
// let test = [1, 3, 5]
// test.push(4);
// console.log("Test: ", test)
// test.sort((a, b) => (b - a));
// console.log("Sorted Test: ", test);

// ORDERING FOR UP REQUESTS
// let test = [1, 3, 5]
// test.push(4);
// console.log("Test: ", test)
// test.sort((a, b) => (a - b));
// console.log("Sorted Test: ", test);