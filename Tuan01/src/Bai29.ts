interface Movable {
    move(): void;
}

class Car implements Movable {
    move(): void {
        console.log("Car is moving.");
    }
}

class Robot implements Movable {
    move(): void {
        console.log("Robot is moving.");
    }
}

const car = new Car();
car.move();

const robot = new Robot();
robot.move();