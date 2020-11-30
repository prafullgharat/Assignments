const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let inventory = [{
    name: "Apples",
    quantity:3
},
{
    name: "Oranges",
    quantity: 7
},
{
    name: "Pomegranates",
    quantity: 55
}];

app.get('/inventory', (req,res) => {
    res.json(inventory);
});

app.put('/inventory', (req,res) => {
    inventory = [req.body];
    res.json(inventory);
});

app.put('/inventory/:name', (req,res) => {
    let i = inventory.findIndex(item => item.name == req.params.name);
    inventory[i] = req.body;
    
    if(i===-1){
        res.status(400).json({"error":"Inventory not found"});
    } else{
        res.json(inventory);
    }
});

app.listen(3000);
console.log("listening to port:3000");