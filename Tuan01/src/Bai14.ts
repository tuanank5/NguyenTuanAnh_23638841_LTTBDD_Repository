class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    manageTeam(): void {
        console.log(`${this.name} is managing the team.`);
    }
}

class Developer extends Employee {
    writeCode(): void {
        console.log(`${this.name} is writing code.`);
    }
}

const manager = new Manager("John", 2000);
manager.manageTeam();

const developer = new Developer("Alice", 1500);
developer.writeCode();