$(document).ready(function () {




})

function initMap() {
    var location = { lat: 36.2227646, lng: -115.1225453 };
    // The map, centered at Mars Ave LV
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: location });

    var marker = new google.maps.Marker({ position: location, map: map });
}




/* <div class="mapouter">
<div class="gmap_canvas">
<iframe width="400" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=mars%20ave%20las%20vegas%2Cnv&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Werbung:
<a href="https://www.pureblack.de">Pure Black GmbH</a>
</div>
<style>.mapouter{position:relative;text-align:right;height:200px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:400px;}</style>
</div> */

// https://www.google.com/mars/#lat=25.222408&lon=665.022765&zoom=5&map=visible