const Elevator = require('./timedElevator')
const Request = require('./request')

const elevator = new Elevator(1, 10);

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
elevator.getDownRequests(new Request(2, 1, "IN"))
elevator.travel();
console.log("List of stops: ", elevator.stops);
console.log("Current floor: ", elevator.currentFloor)