// 1. Create a class Person with attributes name and age. Write a method to display this information.
export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);``
    }
}

const person1 = new Person("Nguyen Tuan Anh", 21);
person1.displayInfo();