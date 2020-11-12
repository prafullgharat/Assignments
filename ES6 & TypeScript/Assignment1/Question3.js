const Order = {

    id: 101,
    title : "xyz",
    price : 1000,
    printOrder :function(){return `id : ${Order.id}, Title :${Order.title}, Price : ${Order.price}`},
    getPrice : function(){return this.price}

}

document.getElementById("result1").innerHTML = `Order object : ${Order.printOrder()} `;

const Order2 = Object.assign(Order);
document.getElementById("result2").innerHTML = `New object : ${Order2.printOrder()} `;
