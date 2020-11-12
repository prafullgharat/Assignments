class Account {
    id:any;
    balance:number;
    name:string;
    static totalbalance:number = 0;
    constructor(id:any, name:string, balance:number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        Account.totalbalance += balance;
        
    }
    static getBalance(){
        return Account.totalbalance;
    }
}

class SavingAccount extends Account {
    interest:number;
    constructor(id:any, name:string, balance:number, interest:number) {
        super(id, name, balance);
        this.interest = interest;
    }
}

class CurrentAccount extends Account {
    cash_credit:number;
    constructor(id:any, name:string, balance:number, cash_credit:number) {
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
}

let saving1 = new SavingAccount(101, "Tom", 5000, 6);
let saving2 = new SavingAccount(102, "Joey", 20000, 6);



let current1 = new CurrentAccount(201, "Alex", 10000, 5);
let current2 = new CurrentAccount(202, "Matt", 30000, 5);

document.getElementById("Savings-Accounts").innerHTML += "<h4>Savings Accounts</h4>";
document.getElementById("Savings-Accounts").innerHTML += `<p> Account 1 : ${JSON.stringify(saving1)}</p>`;
document.getElementById("Savings-Accounts").innerHTML += `<p> Account 2 : ${JSON.stringify(saving2)}</p>`;

document.getElementById("Current-Accounts").innerHTML += "<h4>Current Accounts</h4>";
document.getElementById("Current-Accounts").innerHTML += `<p> Account 1 : ${JSON.stringify(current1)}</p>`;
document.getElementById("Current-Accounts").innerHTML += `<p> Account 2 : ${JSON.stringify(current2)}</p>`;

document.getElementById("total-balance").innerHTML += `<h4>Total balance in the bank is : ${Account.getBalance()}</h4></p>`;





