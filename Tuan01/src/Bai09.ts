export interface Animal {
    name: string;
    sound(): void;
}

const dog: Animal = {
    name: "Dog",

    sound(): void {
        console.log("Woof woof!");
    }
};

console.log("Name:", dog.name);
dog.sound();