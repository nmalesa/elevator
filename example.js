const Elevator = require('./newElevator')
const Request = require('./request')

const elevator = new Elevator(1);

const eightOut = new Request(8, null, "UP", "OUT")
const eightIn = new Request(8, 10, "UP", "IN")
const threeOut = new Request(3, null, "UP", "OUT")
const threeIn = new Request(3, 5, "UP", "IN")

elevator.getRequestsGoingUp(threeOut);
elevator.travel();
elevator.getRequestsGoingUp(eightOut);
elevator.travel();
elevator.travel();
elevator.getRequestsGoingUp(threeIn);
elevator.travel();
elevator.travel();
elevator.travel();
elevator.travel();
elevator.travel();
elevator.travel();
elevator.getRequestsGoingUp(eightIn);
elevator.travel();
elevator.travel();
console.log(elevator.stops);

