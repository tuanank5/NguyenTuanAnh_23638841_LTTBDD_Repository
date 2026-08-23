//2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info.
import { Person } from "./Bai01";

class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    displayAllInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student1 = new Student("Nguyen Tuan Anh", 21, 8.5);

student1.displayAllInfo();