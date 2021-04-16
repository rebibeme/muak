var qty = document.getElementsByClassName("qty form-control").value;

function inc(elem,rowNO){
    document.getElementsByClassName("qty form-control").value = qty++;
}

function dec(elem,rowNo){
    document.getElementsByClassName("qty form-control").value = qty--;
}