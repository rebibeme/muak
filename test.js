function increaseValue() {
    var value = parseInt(document.getElementsById('cart_qty').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementsById('cart_qty').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementsById('cart_qty').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementsById('cart_qty').value = value;
  }

  
  