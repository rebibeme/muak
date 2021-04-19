function calculate() {
    var amount1 = document.getElementById("Amount1");
    var amount2 = document.getElementById("Amount2");
    var amount3 = document.getElementById("Amount3");
 
    var tAmount = Number(amount1.value)
       + Number(amount2.value)
       + Number(amount3.value)
    document.getElementById("totalAmount").value = tAmount 
 
 }
 
 function sub(elem, rowNo) {
    var price = document.getElementById("Price" + rowNo);
    var amount = document.getElementById("Amount" + rowNo);
 
    var quantity = document.getElementById("cart_qty");
 
    var q = Number(quantity.value);
 
    if (q>0) {
       p = Number(price.value);
       var a = p * q;
       amount.value = a;
    } else {
       amount.value = "0.00";
    }
    calculate();
 }