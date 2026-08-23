class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Teacher {
    name: string;
    subject: string;

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }
}

class School {
    students: Student[];
    teachers: Teacher[];

    constructor(students: Student[], teachers: Teacher[]) {
        this.students = students;
        this.teachers = teachers;
    }

    displayInfo(): void {
        console.log("Students:");

        for (const student of this.students) {
            console.log(`- ${student.name}, Age: ${student.age}`);
        }

        console.log("Teachers:");

        for (const teacher of this.teachers) {
            console.log(`- ${teacher.name}, Subject: ${teacher.subject}`);
        }
    }
}

const student1 = new Student("Tuan Anh", 20);
const student2 = new Student("Anh", 21);

const teacher1 = new Teacher("Mr. Smith", "Mathematics");
const teacher2 = new Teacher("Ms. Anna", "English");

const school = new School(
    [student1, student2],
    [teacher1, teacher2]
);

school.displayInfo();