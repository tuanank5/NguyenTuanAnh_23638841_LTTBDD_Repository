interface Vehicle {
    brand: string;
    speed: number;

    start(): void;
}

export class Car implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} car is starting at ${this.speed} km/h.`);
    }
}

class Bike implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} bike is starting at ${this.speed} km/h.`);
    }
}

const car = new Car("Toyota", 100);
car.start();

const bike = new Bike("Honda", 60);
bike.start();