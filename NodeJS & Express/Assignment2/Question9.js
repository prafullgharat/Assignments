var fs = require('fs');
var express = require('express');
var app= express();

var port = process.argv[2];
var fileName = process.argv[3];

app.get('/books',(req,res)=>{
    var object;
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err){
            throw err;
        }
        object = JSON.parse(data);
        res.json(object);
    });
    
});

app.listen(port);
console.log("listening to port :" +port);