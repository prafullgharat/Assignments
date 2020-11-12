function* getNextArmstrong() {
    let index = 1;

    try{
        while (true) {
            let num = index;
            let sum = 0;
            let len = num.toString().length;

            while (num > 0) {
                let temp = num % 10;
                sum += Math.pow(temp, len);
                num = Math.floor(num / 10);
            }
            if (sum === index) {
                yield index++;
            }
            else {
                index++;
            }
        }
    }
    catch(e){
        console.log("Error caught : Number went above 1000");

    }

}

let armstrong = getNextArmstrong();

function reset(){
    armstrong = getNextArmstrong();
}

function getValue() {
    let value = armstrong.next().value;
    if(value<=1000){
        document.getElementById("result").innerHTML += `<p> ${value} </p>`;
    }
    else{
        armstrong.throw(new Error('Number went above 1000'));
        reset();
        document.getElementById("result").innerHTML += `<p>Armstrong Number goes above 1000. Reseting Count...   </p>`;

    }

}




