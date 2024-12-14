// Classes and constructors
class Account {
  owner: string;
  private _balance: number;  // private
  //5-Read-only and optional properties
  readonly id: number;  //Read-only
  nickname?: string;  //optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }
  setNickname(nickname:string){
    return this.nickname = nickname;
  }

  //balance is private now so use get
  getBal():number{return this._balance;}
}

// Classes and constructors
let account = new Account(1, "Raj", 10);
account.deposit(100);
console.log(typeof account); // what is the type? the type is an object
console.log(account instanceof Account);// Is this object of Account class? returns true
console.log(account.setNickname("lordofthunder"));
console.log(account.nickname);
//6- Access control Keywords
console.log(account.getBal());