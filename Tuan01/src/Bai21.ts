class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const numberRepository = new Repository<number>();

numberRepository.add(10);
numberRepository.add(20);
numberRepository.add(30);

console.log(numberRepository.getAll());

const stringRepository = new Repository<string>();

stringRepository.add("Apple");
stringRepository.add("Banana");

console.log(stringRepository.getAll());