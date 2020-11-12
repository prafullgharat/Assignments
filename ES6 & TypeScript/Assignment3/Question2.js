"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        Account.totalbalance += balance;
    }
    Account.getBalance = function () {
        return Account.totalbalance;
    };
    Account.totalbalance = 0;
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var saving1 = new SavingAccount(101, "Tom", 5000, 6);
var saving2 = new SavingAccount(102, "Joey", 20000, 6);
var current1 = new CurrentAccount(201, "Alex", 10000, 5);
var current2 = new CurrentAccount(202, "Matt", 30000, 5);
document.getElementById("Savings-Accounts").innerHTML += "<h4>Savings Accounts</h4>";
document.getElementById("Savings-Accounts").innerHTML += "<p> Account 1 : " + JSON.stringify(saving1) + "</p>";
document.getElementById("Savings-Accounts").innerHTML += "<p> Account 2 : " + JSON.stringify(saving2) + "</p>";
document.getElementById("Current-Accounts").innerHTML += "<h4>Current Accounts</h4>";
document.getElementById("Current-Accounts").innerHTML += "<p> Account 1 : " + JSON.stringify(current1) + "</p>";
document.getElementById("Current-Accounts").innerHTML += "<p> Account 2 : " + JSON.stringify(current2) + "</p>";
document.getElementById("total-balance").innerHTML += "<h4>Total balance in the bank is : " + Account.getBalance() + "</h4></p>";
