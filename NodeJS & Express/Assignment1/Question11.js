var fs = require('fs');
var file = "test.txt";

var myReadStream = fs.createReadStream(__dirname + "/" +file, 'utf8');

myReadStream.on('data', function(data){
   
    console.log(`content of the file ${file} is : " ${data} "`);
})