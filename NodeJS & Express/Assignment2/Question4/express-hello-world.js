var express = require('express');

var app = express();

var port = process.env.PORT || 8080;


app.get('/', function(req,res){
    res.send("Hello World!");

});

app.get('/time', function(req,res){
    var date  = new Date();
    res.send(date.toISOString());

});

app.listen(port);
console.log("you are using port "+port);
