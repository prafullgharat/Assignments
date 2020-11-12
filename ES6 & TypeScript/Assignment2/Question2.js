"use strict";
function getNextArmstrong() {
    var index = 1;
    return {
        next: function () {
            while (true) {
                var num = index;
                var sum = 0;
                var len = num.toString().length;
                while (num > 0) {
                    var temp = num % 10;
                    sum += Math.pow(temp, len);
                    num = Math.floor(num / 10);
                }
                if (sum === index) {
                    return { value: index++, done: false };
                }
                else {
                    index++;
                }
            }
        }
    };
}
var number = getNextArmstrong();
function getValue() {
    var value = number.next().value;
    document.getElementById("result").innerHTML += "<p> " + value + " </p>";
}
