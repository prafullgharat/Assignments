function getNextArmstrong() {
    let index = 1;

    return {
        next: () => {
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
                    return {value: index++, done:false};
                }
                else {
                    index++;
                }
            }
        }
    }
}

let number = getNextArmstrong();


function getValue() {
    let value = number.next().value;
    document.getElementById("result").innerHTML += `<p> ${value} </p>`;
}

