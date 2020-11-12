let names = ["Tom", "Ivan", "Jerry", "Alex"];
document.getElementById("result1").innerHTML = `a) Names Array : ${JSON.stringify(names)}`;

let [, , third,] = names;
document.getElementById("result2").innerHTML = `Third element: ${third}`;


const organization = {
    name: "Capgemini",
    address: {
        city : "Mumbai",
        pincode : 400004,
    }
}

document.getElementById("result3").innerHTML = `b) Organization Object : ${JSON.stringify(organization)}`;

let {name, address : {pincode}} = organization;
document.getElementById("result4").innerHTML = `Pin Code : ${pincode}`;
