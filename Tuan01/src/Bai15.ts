class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: Book[];
    users: User[];

    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }
}

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

console.log(library.books);