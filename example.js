const Elevator = require('./elevator')
const Request = require('./request')

let elevator = new Elevator(1);

let requestFrom3 = new Request(3, 2, "DOWN", "OUT")
let requestFrom10 = new Request(10, 1, "DOWN", "OUT");
// let requestFromInside10 = new Request(10, 7, "DOWN", "IN");

// let requestFrom4 = new Request(4, 6, "UP", "OUT");
// let requestFrom8 = new Request(8, 10, "UP", "OUT");
// let requestFromInside8 = new Request(8, 9, "UP", "IN");

// elevator.sendDownRequest(requestFrom3);
// elevator.sendDownRequest(requestFrom10);
// // elevator.sendDownRequest(requestFromInside10);
// elevator.run();



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