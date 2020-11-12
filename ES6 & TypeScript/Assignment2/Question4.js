let chatroom1 = new Set();

let user1 = new Map();
user1.set("name","Tom");
user1.set("message","hi....");

console.log(user1.get("message"));
chatroom1.add(user1);


let user2 = new Map();
user2.set("name","Alex");
user2.set("message","hello");
chatroom1.add(user2);


let user3 = new Map();
user3.set("name","Joey");
user3.set("message", "I am Joey");
chatroom1.add(user3);


let chatroom2 = new Set();

let user4 = new Map();
user4.set("name","Sheldon");
user4.set("message","I am robot.");
chatroom2.add(user4);


let user5= new Map();
user5.set("name","Bryce");
user5.set("message","hello guys");
chatroom2.add(user5);


let user6 = new Map();
user6.set("name","Chandler");
user6.set("message", "Chandler here");
chatroom2.add(user6);


// for(let user of chatroom1){
//     console.log(user.get("message"));
// }
// console.log(user1.get("message"));


// for(let [key,value] of user4.entries()){
//         console.log(key);
//         console.log(value);
//     }

function chat1(){

    document.getElementById("chatroom1-users").innerHTML+="<h4>Users in chatroom1 are:</h4>";
    for(let user of chatroom1){
        let username = user.get("name");
        document.getElementById("chatroom1-users").innerHTML+=`<p>${username}</p>`;
        console.log(user.get("name"));
    }

    document.getElementById("chatroom1-messages").innerHTML="<h4>Messages in chatroom1 are:</h4>";
    for(let user of chatroom1){
        document.getElementById("chatroom1-messages").innerHTML+=`<p>${user.get("name")} : ${user.get("message")}</p>`;
    }
    
}

chat1();

function chat2(){
    document.getElementById("chatroom2-users").innerHTML+="<h4>Users in Chatroom 2 are:</h4>";
    for(let user of chatroom2){
        let username = user.get("name");
        document.getElementById("chatroom2-users").innerHTML+=`<p>${username}</p>`;
        console.log(user.get("name"));
    }

    document.getElementById("chatroom2-messages").innerHTML="<h4>Messages in chatroom1 are:</h4>";
    for(let user of chatroom2){
        document.getElementById("chatroom2-messages").innerHTML+=`<p>${user.get("name")} : ${user.get("message")}</p>`;
    }
}

chat2();