class Request {
    direction = {
        up: "UP",
        down: "DOWN",
        idle: "IDLE",
    };

    location = {
        inside: "INSIDE_ELEVATOR",
        outside: "OUTSIDE_ELEVATOR",
    }

    constructor(currentFloor, desiredFloor, direction, location) {
        this.currentFloor = currentFloor;
        this.desiredFloor = desiredFloor;
        this.direction = direction;
        this.location = location;
    }
}

module.exports = Request;