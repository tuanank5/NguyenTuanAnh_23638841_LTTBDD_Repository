class Animal {
    protected makeSound(): void {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog says: Woof woof!");
    }

    showSound(): void {
        this.makeSound();
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat says: Meow!");
    }

    showSound(): void {
        this.makeSound();
    }
}

const dog = new Dog();
dog.showSound();

const cat = new Cat();
cat.showSound();