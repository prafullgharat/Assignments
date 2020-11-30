var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { json } = require('body-parser');

class Item{
    public name:string;
    public qty:number;
    constructor(name:string,qty:number){
        this.name = name;
        this.qty = qty;
        
    }
}

interface IDatabase{
    getItem(itemName:string): Item;
    getInventory(): Array<Item>;
}

class FakeDatabase implements IDatabase{
    public inventory: Array<Item>=[];
    
    constructor(){
        this.inventory.push(new Item("Apples",3));
        this.inventory.push(new Item("Oranges",7));
        this.inventory.push(new Item("Banana",55));
    }
    
    getItem(itemName:string):Item{
        for(var item of this.inventory){
            if(item.name==itemName){
                return new Item(item.name,item.qty);
            }
        }
        
        return undefined;
        
        
    }

    getInventory(): Array<Item>{
        return this.inventory;
    }

}

let database = new FakeDatabase();

app.use(bodyParser.json());

app.get("/inventory", function(req,res){
    res.json(database.getInventory());
});

app.get("/inventory/:id", function(req,res){
    var id = req.params.id;
    var item = database.getItem(id);
    if(item==undefined){
        res.send("Cannot find the Item");
    }
    else{
        res.json(item);
    }
    
});

app.post("/inventory", function(req,res){
    var item = req.body;
    database.inventory.push(item);
    res.json(database.getInventory());
});

app.delete("/inventory/:id", function(req,res){
    let newList:Array<Item>;

    newList = database.inventory.filter(item => item.name !=req.params.id)
    if(newList === database.inventory){
        res.json({"error":"Cannot find the specified item name"});

    }
    else{
        database.inventory = newList;
        res.json(database.getInventory());
    }
});

app.delete("/inventory", function(req,res){
        database.inventory = [];
        res.json(database.getInventory());
    });


app.put("/inventory/:name", function(req,res){

    let index = database.inventory.findIndex(item => item.name === req.params.name);
    
    database.inventory[index] = JSON.parse(JSON.stringify(req.body));
    
    if(index===-1){
        res.json({"error":"Name not found"});
    } else{
        res.json(database.getInventory());
    }
});

app.put("/inventory", function(req,res){
    database.inventory = req.body;
    res.json(database.getInventory());
});

app.listen(3000, function(){
    console.log("Listening from port 3000");
});

