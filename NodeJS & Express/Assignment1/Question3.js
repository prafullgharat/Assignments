var fs = require('fs');

fs.readdir(__dirname,(err,files) => {
    if (err) {
        console.log(err);
    } 
    files.forEach(function (file) {
        fs.stat(file, (err,stat)=>{
            if(err){
                console.log(err);
            }
            else if(stat.isFile()){
                console.log(`FILE:${file}`);
            }
            else if(stat.isDirectory()){
                console.log(`DIR:${file}`);
            }
        })
    });
});
