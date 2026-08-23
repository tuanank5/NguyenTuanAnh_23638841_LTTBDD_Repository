class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const products: Product[] = [
    new Product("Laptop", 500),
    new Product("Mouse", 50),
    new Product("Keyboard", 150),
    new Product("Headphone", 80),
    new Product("Monitor", 200)
];

// Lọc sản phẩm có price > 100
const filteredProducts = products.filter(product => product.price > 100);

console.log(filteredProducts);