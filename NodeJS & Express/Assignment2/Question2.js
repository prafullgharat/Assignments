var express = require('express');
var strftime = require('strftime');

app = express();

var currentYear =  strftime('%Y');

app.get('/year',function(req,res){
    var age = req.param('age');
    var year = currentYear - age;
    res.send("You were born in "+year);
})

app.listen(3000);