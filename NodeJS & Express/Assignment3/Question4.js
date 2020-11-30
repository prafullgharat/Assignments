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

app.delete('/inventory', (req,res) => {
    inventory.splice(0,inventory.length);
    res.status(200).send("Deleted all records")
    
});

app.delete('/inventory/:name', (req,res) =>{
    let i = inventory.findIndex(item => item.name === req.params.name);
    if(i !== -1) {
        inventory.splice(i,1);
        res.json(inventory);
    }else{
        res.status(400).json({"Error":"Cannot find data to delete"})
    }

})

app.listen(3000);
console.log("listening to port:3000");