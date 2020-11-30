
var fs = require('fs');

var arguments = process.argv ; 
var fileName = arguments[2];
var text = arguments[3];
fs.writeFile(fileName, text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");

    fs.readFile(fileName,'utf8',function(err,data){
        if(err) {
            return console.log(err);
        }
        console.log(data);
    });
}); 