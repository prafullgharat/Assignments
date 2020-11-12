interface Printable {
    name: string;
    radius?: number;
    id?: number;
}

let circle: Printable = {
    name: "c1",
    radius: 5 ,
}

let employee: Printable = {
    name: "Tom",
    id: 101
}


 
function print(obj:object){
    
        document.getElementById("result").innerHTML += `<p> ${JSON.stringify(obj)} </p>`;
        console.log(obj);

    
}

function printAll(circle:object , employee:object) {
    for(let obj of arguments){
        print(obj);
    }

}


document.getElementById("result").innerHTML += `<p>Objects are :</p>`;

printAll(circle,employee);