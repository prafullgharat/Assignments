document.getElementById("help").innerText="This TEXTAREA provides context sensitive help. Click on any input field or use the TAB to get more information about the input field";

function helpDefault(){
    document.getElementById("help").innerText="This TEXTAREA provides context sensitive help. Click on any input field or use the TAB to get more information about the input field";
}

function helpName(){
    document.getElementById("help").innerText="This is a name input field, please enter your name.";
}

function helpEmail(){
    document.getElementById("help").innerText="This is a email input field, please enter your email.";    
}

function helpTip(){
    document.getElementById("help").innerText="Select the % of tip.";
}

function helpAddress(){
    document.getElementById("help").innerText="This is an address field, please enter your address.";
}


var summaryButton = document.getElementById("summary-button");
summaryButton.disabled=true;

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var toppings = document.getElementsByName("topping");
    var topping=[];
    for(i=0;i<toppings.length;i++){
        if(toppings[i].checked){
            topping.push(toppings[i].value);
        }
    }

    var getPizzas = document.getElementsByName("get-pizza");
    var getPizza="";
    for(i=0;i<getPizzas.length;i++){
        if(getPizzas[i].checked){
            getPizza=getPizzas[i].value;
        }
    }


    var address= document.getElementById("address").value;
    var tip = document.getElementById("tip").value;
    
    if(name!=="" && email!=="" && getPizza !=="" && tip!=="" && address!==""  && topping.length!==0){
        summaryButton.disabled=false;
        summaryButton.addEventListener("click",function(){
            var toppingTotal="";
            var tipFraction = parseInt(tip)/100;
            var total=0.0;


            if(getPizza=="Delivery"){
                var delivery="Yes";
                total= (10+1.5*topping.length+5)*(1.0+tipFraction);
            }
            else if(getPizza=="Pickup"){
                var delivery="Yes";
                total= (10+1.5*topping.length+0)*(1.0+tipFraction);
            }
            for(i=0;i<topping.length;i++){
                toppingTotal=toppingTotal+"<tr><th>Topping"+(i+1)+"</th><td>"+topping[i]+"</td></tr>";
            }

            document.getElementById("summary-heading").innerHTML="Pizza Order Summary";
            document.getElementById("summary-table").innerHTML=" <table border='1'><tr><th>Name:</th><td>"+name+"</td></tr>"+
            "<tr><th>Email:</th><td>"+email+"</td></tr>"+
            "<tr><th>Address:</th><td>"+address+"</td></tr>"+
            "<tr colspan=2><th>Toppings:</th></tr>"+
            toppingTotal+
            "<tr><th>Delivery?</th><td>"+delivery+"</td></tr>"+
            "<tr><th>Tip amount</th><td>"+tip+"%</td></tr>"+
            "<tr><th>Total</th><td>$"+total.toFixed(1)+"</td></tr></table>";
        })
    }
    else{
        document.getElementById("error").textContent="Please fill all necessary fields.";
    }
}

