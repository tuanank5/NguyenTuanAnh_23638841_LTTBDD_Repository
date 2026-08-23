class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Getter
    getName(): string {
        return this.name;
    }

    // Setter
    setName(name: string): void {
        this.name = name;
    }
}

const user1 = new User("Nguyen Tuan Anh");

console.log("Name:", user1.getName());

user1.setName("Nguyen Anh");

console.log("New name:", user1.getName());