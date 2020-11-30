
var fs = require('fs');

var arguments = process.argv ; 

fs.writeFile("writeMe.txt", arguments[2], function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 