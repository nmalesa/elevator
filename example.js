const Elevator = require('./elevator')
const Passenger = require('./passenger')
const ExpressElevator = require('./express-elevator')
const MaxLoad = require('./max-load')
const TwoElevators = require('./two-elevators')

const elevator = new Elevator(1);

const requestFrom3 = new Passenger(3, 2, "DOWN", "OUT", 0);
const requestFrom10 = new Passenger(10, 1, "DOWN", "OUT", 1);

elevator.getPassengersGoingDown(requestFrom3);
elevator.getPassengersGoingDown(requestFrom10);