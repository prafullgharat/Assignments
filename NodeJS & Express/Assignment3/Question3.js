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

app.post('/inventory', (req,res) => {
    if(JSON.stringify(req.body) !== '{}'){
        inventory.push(req.body);
        res.json(inventory);
    }else {
        res.status(400).json({"error":"Data not found in req.body"});
    }

});

app.listen(3000);
console.log("listening to port:3000");