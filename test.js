function increaseValue() {
    var value = parseInt(document.getElementsByClassName('qty form-control').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementsByClassName('qty form-control').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementsByClassName('qty form-control').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementsByClassName('qty form-control').value = value;
  }

  <button class="cart-qty-plus" id="increase" onclick="increaseValue()" value="Increase Value">+</button>
  <input type="number" id="qty form-control" value="0" min="0"/>
  <button class="cart-qty-minus" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</button>
  