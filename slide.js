var no_of_slides = 0;
showSlides(); 

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("ActiveSlide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  no_of_slides++;
  if (no_of_slides > slides.length) {no_of_slides = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[no_of_slides-1].style.display = "block";  
  dots[no_of_slides-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

showSlides1(no_of_slides);

function plusSlides(n) {
  showSlides1(no_of_slides += n);
}

function currentSlide(n) {
  showSlides1(no_of_slides = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("ActiveSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {no_of_slides = 1}    
  if (n < 1) {no_of_slides = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[no_of_slides-1].style.display = "block";  
  dots[no_of_slides-1].className += " active";
}