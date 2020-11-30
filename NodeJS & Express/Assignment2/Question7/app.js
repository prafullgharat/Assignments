var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


var port = 3000;
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');


var shoppingList = [{id: 1, name: 'milk', price:'50'}, { id:2, name:'bread' ,price:'30'}];

app.get('/items', function(req,res){
    res.render('items', {shoppingList:shoppingList});
});

app.get('/items/:id', function(req,res){
    var data = shoppingList.filter(function(item){
           return item.id == req.params.id;
        }); 
    res.render('items', {shoppingList:data});
});

app.post('/items', urlencodedParser, function(req,res){
    shoppingList.push({id:req.body.id,name:req.body.name,price:req.body.price});
    res.redirect('/items');
});

app.delete('/items/:id', function(req,res){ 
    shoppingList = shoppingList.filter(function(item){
    return item.id != req.params.id;
  }); 
  console.log(shoppingList);
  res.json(shoppingList);
});

app.patch('/items/:id',function(req,res){
    
    var id = req.params.id;
    var name = req.body.name;
    var price = req.body.price;
    
    shoppingList.forEach((item) => {
        if(item.id == id) {
            if(name !== undefined){
                item.name = name;
            }
            if(price !== undefined){
                item.price = price;
            }
        }
    });
    res.json(shoppingList);
});

app.listen(port);