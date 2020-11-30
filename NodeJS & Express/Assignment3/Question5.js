var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var json = require('body-parser').json;
// Class to create Objects of Type Item
var Item = /** @class */ (function () {
    function Item(name, qty) {
        this.name = name;
        this.qty = qty;
    }
    return Item;
}());
var FakeDatabase = /** @class */ (function () {
    function FakeDatabase() {
        this.inventory = [];
        this.inventory.push(new Item("Apples", 3));
        this.inventory.push(new Item("Oranges", 7));
        this.inventory.push(new Item("Banana", 55));
    }
    FakeDatabase.prototype.getItem = function (itemName) {
        // var found = false;
        // var temp;
        for (var _i = 0, _a = this.inventory; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name == itemName) {
                return new Item(item.name, item.qty);
                // found = true;
                // temp = item;
                // break;
            }
        }
        // if(found){
        //     return temp;
        // }
        // else{
        return undefined;
        // }
    };
    FakeDatabase.prototype.getInventory = function () {
        return this.inventory;
    };
    return FakeDatabase;
}());
//Initializing Fake Database
var database = new FakeDatabase();
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// const { json } = require('body-parser');
app.use(bodyParser.json());
app.get("/inventory", function (req, res) {
    res.json(database.getInventory());
});
app.get("/inventory/:id", function (req, res) {
    var id = req.params.id;
    // var found = false;
    var item = database.getItem(id);
    if (item == undefined) {
        res.send("Cannot find the Item");
    }
    else {
        res.json(item);
    }
});
app.post("/inventory", function (req, res) {
    var item = req.body;
    database.inventory.push(item);
    //console.log(req.body);
    // res.send("Added Successfully: "+item);
    res.json(database.getInventory());
});
app["delete"]("/inventory/:id", function (req, res) {
    // console.log("In delete block");
    var newList;
    // var found = false;
    // for(var i=0;i<database.inventory.length;i++){
    //     if(fd.inventory[i].name==req.params.id){
    //         found = true;
    //         fd.inventory.splice(i,i+1);
    //     }
    // }
    newList = database.inventory.filter(function (item) { return item.name != req.params.id; });
    if (newList === database.inventory) {
        res.json({ "error": "Cannot find the specified item name" });
    }
    else {
        database.inventory = newList;
        res.json(database.getInventory());
    }
});
app["delete"]("/inventory", function (req, res) {
    // console.log("In delete block");
    database.inventory = [];
    res.json(database.getInventory());
});
app.put("/inventory/:name", function (req, res) {
    // var found = false;
    // for(var i=0;i<fd.inventory.length;i++){
    //     if(fd.inventory[i].name==req.params.id){
    //         found = true;
    //         fd.inventory[i] = req.body;
    //         break;
    //     }
    // }
    // if(found){
    //     res.send("Item modified successfully");
    // }
    // else{
    //     res.send("Cannot find the specified Item Name");
    // }
    var index = database.inventory.findIndex(function (item) { return item.name === req.params.name; });
    database.inventory[index] = JSON.parse(JSON.stringify(req.body));
    if (index === -1) {
        res.json({ "error": "Name not found" });
    }
    else {
        res.json(database.getInventory());
    }
});
app.put("/inventory", function (req, res) {
    database.inventory = req.body;
    res.json(database.getInventory());
});
app.listen(3000, function () {
    console.log("Listening from port 3000");
});
