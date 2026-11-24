import {BankAccount} from './BankAccount.js';
// export {BankAccount};
const account1 = new BankAccount('123456', 'David Nwafor', 1000);

const account2 = new BankAccount('789012', 'Jane Doe', 500);

const account3 = new BankAccount('345678', 'John Smith', 2000);

account1.deposit(500);
console.log(`Account 1 Balance: ${account1.checkBalance()}`); // Output: Account 1 Balance: 1500

account2.withdraw(200);
console.log(`Account 2 Balance: ${account2.checkBalance()}`); // Output: Account 2 Balance: 300

account3.withdraw(2500); // Output: Insufficient funds
console.log(`Account 3 Balance: ${account3.checkBalance()}`); // Output: Account 3 Balance: 2000    
