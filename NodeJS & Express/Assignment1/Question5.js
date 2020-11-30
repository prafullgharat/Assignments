var fs = require('fs');

var text = "john";
var count = 0;
var array = [];

array = fs.readFileSync('que5.txt','utf-8').split(" ");

array.map(str => {
    if(str.search(text) != -1){
        count++;
    }
})

console.log(`${text} appeared ${count} times in the file.`);