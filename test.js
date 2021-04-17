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

  
  