/*back to top button*/
topbutton = document.getElementById("topbtn");

<<<<<<< HEAD:navbarandtopbutton.js
window.onscroll = function() {scrollFunction(),myFunction()};
=======
window.onscroll = function () {scrollFunction()};
>>>>>>> 8ac4eb8f87dd442d0750de76472f73b7267c56d3:topbutton.js

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
