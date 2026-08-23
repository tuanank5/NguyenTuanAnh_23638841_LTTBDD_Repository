class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    calculateTotal(): number {
        let total = 0;

        for (const product of this.products) {
            total += product.price;
        }

        return total;
    }
}

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Mouse", 50);
const product3 = new Product("Keyboard", 100);

const order = new Order([
    product1,
    product2,
    product3
]);

console.log("Total price:", order.calculateTotal());