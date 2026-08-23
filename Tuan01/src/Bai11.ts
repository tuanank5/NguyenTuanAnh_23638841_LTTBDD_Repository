class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} says: Woof woof!`);
    }
}

class Cat extends Animal {
    meow(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

const dog = new Dog("Buddy");
dog.bark();

const cat = new Cat("Mimi");
cat.meow();