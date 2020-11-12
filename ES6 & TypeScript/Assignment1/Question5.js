function add(a=4,b=5){
    
    document.getElementById("result1").innerHTML = `a.Result of add() function with default values a=4 and b=5 is  : ${a+b} `;

}

add();

function userFriends(username, ...userfriends){
    document.getElementById("result2").innerHTML = `b. Username = ${username} , User's Friends = ${userfriends}`;
}
userFriends("James","Toni", "Matt", "Joey");


function printCapitalNames(name1,name2,name3,name4,name5){
   document.getElementById("result3").innerHTML = `c. Names in Capital are ${name1.toUpperCase()}, ${name2.toUpperCase()}, ${name3.toUpperCase()}, ${name4.toUpperCase()}, ${name5.toUpperCase()}`;

}

let names = ["Tom","Ivan","Jerry","Sheldon","Raj"];
printCapitalNames(...names);