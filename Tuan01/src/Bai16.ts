class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(100);
console.log("Number:", numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log("String:", stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log("Boolean:", booleanBox.getValue());