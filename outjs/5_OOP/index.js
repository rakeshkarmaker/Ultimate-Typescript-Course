"use strict";
// Classes and constructors
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    setNickname(nickname) {
        return this.nickname = nickname;
    }
    //balance is private now so use get
    getBal() { return this._balance; }
}
// Classes and constructors
let account = new Account(1, "Raj", 10);
account.deposit(100);
console.log(typeof account); // what is the type? the type is an object
console.log(account instanceof Account); // Is this object of Account class? returns true
console.log(account.setNickname("lordofthunder"));
console.log(account.nickname);
//6- Access control Keywords
console.log(account.getBal());
