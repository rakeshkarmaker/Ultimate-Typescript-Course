class Accounts {
    nickname?: string; //optional
  
    constructor( //7- Parameter properties used
      public readonly id: number,
      public owner: string,
      private _balance: number
    ) {/*Automatically set and declared*/}

    //old
    getBal():number{return this._balance;}

    //# 8- Getter setter
    get balance():number {
        return this._balance;
    }
    set balance(value:number){
        if(value<0)
            throw new Error("Invalid Value");
        this._balance = value;
    }

}

let accounts = new Accounts(1,'Raj',10);

console.log(accounts.getBal); //(method) Accounts.getBal(): number | returns, [Function: getBal]
console.log(accounts.balance);//(property) Accounts.balance: number| returns, value(10 for this case) 


