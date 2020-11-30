const fs = require('fs');

var integerArray = fs.readFileSync('other.txt','utf-8').split(",");

function getTotal(total, currentValue) {
    return parseInt(total) + parseInt(currentValue);
}

var sum = integerArray.reduce(getTotal);
console.log("Sum of all integers stored in other.txt file is " +sum);