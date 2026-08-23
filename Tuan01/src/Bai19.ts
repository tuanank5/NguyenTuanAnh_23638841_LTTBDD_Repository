export class Animal {
    sound(): void {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    override sound(): void {
        console.log("Dog says: Woof woof!");
    }
}

class Cat extends Animal {
    override sound(): void {
        console.log("Cat says: Meow!");
    }
}

const animals: Animal[] = [
    new Dog(),
    new Cat()
];

for (const animal of animals) {
    animal.sound();
}