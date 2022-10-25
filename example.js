const Elevator = require('./newElevator')
const Request = require('./request')

const elevator = new Elevator(1, 10);

// const eightOut = new Request(8, null, "UP", "OUT")
// const eightIn = new Request(8, 10, "UP", "IN")
// const threeOut = new Request(3, null, "UP", "OUT")
// const threeIn = new Request(3, 5, "UP", "IN")

// elevator.getUpRequests(new Request(8, null, "UP", "OUT"));
// elevator.travel();
// elevator.getUpRequests(new Request(3, null, "UP", "OUT"));
// elevator.travel();
// elevator.travel();
// elevator.getUpRequests(new Request(3, 5, "UP", "IN"))
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.getUpRequests(new Request(8, 10, "UP", "IN"))
// elevator.travel();
// elevator.travel();
// console.log("Stops: ", elevator.stops);
// console.log("current floor: ", elevator.currentFloor)


// const threeOut = new Request(3, null, "DOWN", "OUT")
// const threeIn = new Request(3, 2, "DOWN", "IN")
// const tenOut = new Request(10, null, "DOWN", "OUT")
// const tenIn = new Request(10, 1, "DOWN", "IN")

// elevator.getDownRequests(threeOut)
// console.log("Queue: ", elevator.downRequests)
// elevator.travel();
// elevator.getDownRequests(tenOut);
// console.log("Queue: ", elevator.downRequests)
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.getDownRequests(tenIn);
// console.log("Queue: ", elevator.downRequests)
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.getDownRequests(threeIn);
// console.log("Queue: ", elevator.downRequests)
// elevator.travel();
// elevator.travel();
// elevator.travel();
// console.log("Stops: ", elevator.stops)
// console.log("Current floor: ", elevator.currentFloor)


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
console.log(elevator.stops);
console.log(elevator.currentFloor)





// elevator.getRequestsGoingUp(threeOut);
// elevator.travel();
// elevator.getRequestsGoingUp(eightOut);
// elevator.travel();
// elevator.travel();
// elevator.getRequestsGoingUp(threeIn);
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.travel();
// elevator.getRequestsGoingUp(eightIn);
// console.log("Queue: ", elevator.upRequests)
// elevator.travel();
// elevator.travel();
// elevator.travel();
// console.log(elevator.stops);

