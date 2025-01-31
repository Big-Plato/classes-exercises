// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
// My solution
class BankAccount {
    constructor(accNumber, balance) {
        this.accNumber = accNumber;
        this.balance = balance;
    }
    show () {
        console.log(`accNumber: ${this.accNumber}`);
        console.log(`balance: ${this.balance}`);
    }
    deposit (depo) {
        console.log(`Deposit: ${depo}.`);
        return this.balance + depo;
    }

    withdraw (take) {
        console.log(`Take: ${take}.`);
        this.balance = this.balance - take;
    }
}

const bank1 = new BankAccount(123, 1220);



// w3Resource solution
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`A/c No.: ${accountNumber}`);
    console.log(`Opening Balance: $${balance}`);    
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } 
    else 
    {
      console.log(`Want to withdrawn: $${amount}`);
      console.log('Insufficient balance');
    }
  }
  displayBalance() {
    console.log(`Account Balance: $${this.balance}`);
  }
}
// Create an instance of the BankAccount class
const account = new BankAccount('SB-123', 1500);
// Deposit money into the account
account.deposit(500);
// Withdraw money from the account
account.withdraw(400);
// Display the account balance
account.displayBalance();
// Withdraw money from the account
account.withdraw(1800);
// Display the account balance
account.displayBalance();
