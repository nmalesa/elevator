class Request {
    constructor(currentFloor, desiredFloor, direction, location) {
        this.currentFloor = currentFloor;
        this.desiredFloor = desiredFloor;
        this.direction = direction;
        this.location = location;
    }
}

module.exports = Request;