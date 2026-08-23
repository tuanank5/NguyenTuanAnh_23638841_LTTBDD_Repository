class Account {
    public username: string;
    private password: string;
    readonly accountNumber: string;

    constructor(username: string, password: string, accountNumber: string) {
        this.username = username;
        this.password = password;
        this.accountNumber = accountNumber;
    }

    showInfo(): void {
        console.log("Username:", this.username);
        console.log("Account Number:", this.accountNumber);
    }
}

const account1 = new Account(
    "sa",
    "sapassword",
    "ACC001"
);

account1.showInfo();