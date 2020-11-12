class Fibonacci {
    #previousNo = 0;
    #currentNO = 1;

    [Symbol.iterator]() {
        let index = 0;
        return { 
                next : () => {
                    // if(index < 10){
                    //     let c = this.previousNo;
                    //     this.previousNo = this.currentNO;
                    //     this.currentNO  = c + this.currentNO;

                    //     index +=1;
                    //     return {value:this.currentNO, done:true};
                    // }
                    // else{
                    //     return {done:true};
                    // }

                    let next = this.#previousNo + this.#currentNO;;
                    this.#previousNo = this.#currentNO;
                    this.#currentNO  = next;
                    return {value:this.#currentNO, done:true};
            }

        }
    
    }
}
let output = new Fibonacci()[Symbol.iterator]();


function getFibonacci(){
    let value = output.next().value;
    document.getElementById("result").innerHTML += `<p> ${value} </p>`;
}

