interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} by cash.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} by card.`);
    }
}

const cash = new CashPayment();
cash.pay(100);

const card = new CardPayment();
card.pay(200);