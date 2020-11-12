"use strict";
var circle = {
    name: "c1",
    radius: 5,
};
var employee = {
    name: "Tom",
    id: 101
};
function print(obj) {
    document.getElementById("result").innerHTML += "<p> " + JSON.stringify(obj) + " </p>";
    console.log(obj);
}
function printAll(circle, employee) {
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var obj = arguments_1[_i];
        print(obj);
    }
}
document.getElementById("result").innerHTML += "<p>Objects are :</p>";
printAll(circle, employee);
