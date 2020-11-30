const express = require('express');
const app = express();
app.use(express.json());

let inventory = [
            {
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
            }
        ];

app.get('/inventory', (req,res) => {
    res.json(inventory);
});

app.get('/inventory/:name', (req,res) => {
    let i = inventory.findIndex(item  => item.name === req.params.name);
    if(i===-1){
        res.send({"error":"Please provide right url"});
    } else{
        res.json(inventory[i]);
    }
});

app.listen(3000);
console.log("listening to port:3000");