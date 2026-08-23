class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);