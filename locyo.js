// (Location operations)
var region = 'Northeast';
document.getElementById('yo').innerHTML = '<h2>Want to be notified when there\'s Ebola news in the ' + region + '? *Yo* us at Ebola' + region + '!</h2><p style="font-size=10px;">(Click to close.)</p>';
move('.popup')
    .set('height','auto')
    .set('top','0px')
    .duration('1s')
    .end();
var x = document.getElementById('debug');
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

    x.innerHTML = "Hi Testing.";

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function getRegion() {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    // if (lng <= -67 && lng >= -80 && lat >= 40 && lat =< 50) {
    //     region = "Northeast";
    // }
    // else if (lng <= -80 && lng >= -105 && lat >= 40 && lat =< 50) {
    //     region = "Midwest";
    // }
    // else if (lng <= -67 && lng >= -105 && lat >= 30 && lat =< 40) {
    //     region = "South";
    // }
    // else if (lng <= -105 && lng >= -115 && lat >= 30 && lat =< 50) {
    //     region = "Mountain";
    // }
    // else if (lng <= -115 && lng >= -125 && lat >= 30 && lat =< 50) {
    //     region = "West";
    // }
    // else { region = "Region not found."; }
}
getLocation();
getRegion();
x.innerHTML = region;
document.getElementById('yo').onclick = function(e) {
    move('.popup')
        .set('top','-250px')
        .duration('1s')
        .end();
};