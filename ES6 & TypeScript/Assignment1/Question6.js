function submit(){
    let model = document.getElementById("model").value;
    let desk = document.getElementById("desk").value;
    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML = `${name} ,your request is submitted with details as Model: ${model} and Desk: ${desk}`

}