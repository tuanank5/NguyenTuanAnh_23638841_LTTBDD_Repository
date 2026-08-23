abstract class Appliance {
    abstract turnOn(): void;
}

class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is turned on.");
    }
}

class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air conditioner is turned on.");
    }
}

const fan = new Fan();
fan.turnOn();

const airConditioner = new AirConditioner();
airConditioner.turnOn();