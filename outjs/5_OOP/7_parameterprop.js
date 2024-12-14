"use strict";
class Accounts {
    constructor(//7- Parameter properties used
    id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    //old
    getBal() { return this._balance; }
    //# 8- Getter setter
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid Value");
        this._balance = value;
    }
}
let accounts = new Accounts(1, 'Raj', 10);
console.log(accounts.getBal); //(method) Accounts.getBal(): number | returns, [Function: getBal]
console.log(accounts.balance); //(property) Accounts.balance: number| returns, value(10 for this case) 
