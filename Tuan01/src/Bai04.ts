class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(10, 5);

// Tính và hiển thị diện tích
console.log(`Area: ${rectangle1.calculateArea()}`);

// Tính và hiển thị chu vi
console.log(`Perimeter: ${rectangle1.calculatePerimeter()}`);