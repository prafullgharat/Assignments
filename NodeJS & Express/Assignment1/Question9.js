var fs = require('fs')
var concat = require('concat-stream')
var concatStream  = concat(function(data) {console.log(data);});


concatStream.write(fs.readFileSync('que5.txt','utf-8').split(" "));
concatStream.write(fs.readFileSync('other.txt','utf-8').split(","));
concatStream.end();
