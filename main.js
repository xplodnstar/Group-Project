
$(document).ready(function () {




})

function initMap() {
    var location = { lat: 36.2227646, lng: -115.1225453 };
    // The map, centered at Mars Ave LV
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: location });

    var marker = new google.maps.Marker({ position: location, map: map });
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 1000); // Change image every 1 second
}

