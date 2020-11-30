const express = require('express');
const app= express();

app.set('view engine','pug');
app.set('views', __dirname+'/templates');

var port = process.argv[2];
var templateName = process.argv[3];

app.get('/home',(req,res)=>{
    res.render(templateName,{date: new Date().toDateString()});
});

app.listen(port);
console.log("listening to port :" +port);