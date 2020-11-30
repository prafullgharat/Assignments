var fs = require('fs');

var arguments = process.argv ; 

var myReadStream = fs.createReadStream(__dirname + "/" +arguments[2], 'utf8');

myReadStream.on('data', function(data){
   
    console.log(data);
})