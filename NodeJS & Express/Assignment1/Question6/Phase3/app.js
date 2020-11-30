var calculator = require('./calculator');
var moment = require('moment');

console.log(`Today is : ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`)
console.log(calculator.sum(3,7));
console.log(calculator.multiplication(3,7));

