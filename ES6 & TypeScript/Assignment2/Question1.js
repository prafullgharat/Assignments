"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _previousNo, _currentNO;
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        _previousNo.set(this, 0);
        _currentNO.set(this, 1);
    }
    Fibonacci.prototype[(_previousNo = new WeakMap(), _currentNO = new WeakMap(), Symbol.iterator)] = function () {
        var _this = this;
        var index = 0;
        return {
            next: function () {
                // if(index < 10){
                //     let c = this.previousNo;
                //     this.previousNo = this.currentNO;
                //     this.currentNO  = c + this.currentNO;
                //     index +=1;
                //     return {value:this.currentNO, done:true};
                // }
                // else{
                //     return {done:true};
                // }
                var next = __classPrivateFieldGet(_this, _previousNo) + __classPrivateFieldGet(_this, _currentNO);
                ;
                __classPrivateFieldSet(_this, _previousNo, __classPrivateFieldGet(_this, _currentNO));
                __classPrivateFieldSet(_this, _currentNO, next);
                return { value: __classPrivateFieldGet(_this, _currentNO), done: true };
            }
        };
    };
    return Fibonacci;
}());
var output = new Fibonacci()[Symbol.iterator]();
function getFibonacci() {
    var value = output.next().value;
    document.getElementById("result").innerHTML += "<p> " + value + " </p>";
}
