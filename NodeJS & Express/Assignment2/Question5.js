var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedParser);

app.get('/form',function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.post('/form',function(req,res){
    res.send(req.body.str.split('').reverse().join(''));
});


app.listen(3000);