let names = ["Tom","Ivan","Jerry"];

document.getElementById("result1").innerHTML = `Names  : ${JSON.stringify(names)} `;

let output = names.map( (name) => {return {"name" : name, "length":name.length}} );

document.getElementById("result2").innerHTML = `Output  : ${JSON.stringify(output)} `;
