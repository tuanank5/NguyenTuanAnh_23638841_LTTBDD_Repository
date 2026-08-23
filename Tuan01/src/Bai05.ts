class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
            console.log(`Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance!");
        }
    }
}

const account = new BankAccount(1000);

// Nạp tiền
account.deposit(500);

// Rút tiền
account.withdraw(300);

// Thử rút quá số dư
account.withdraw(1500);