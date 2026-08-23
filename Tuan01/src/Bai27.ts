class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(
            `My name is ${this.name}, I am ${this.age} years old, and I teach ${this.subject}.`
        );
    }
}

const teacher = new Teacher("John", 35, "Mathematics");

teacher.introduce();