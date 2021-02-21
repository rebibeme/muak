/*back to top button*/
topbutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction(),myFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*sticky navbar*/
var navbar = document.getElementById("lower");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
