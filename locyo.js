// (Location operations)
var region = 'Not found.';
var x = document.getElementById('debug');
x.innerHTML = "Here we are";
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    x.innerHTML = "Latitude: " + lat + 
    "<br>Longitude: " + lng; 
    if (lng<=67 && lng>=-80 && lat>=40 && lat<=50) {
        region = 'Northeast';
    }
    else if ((lng <= -80) && (lng >= -105) && (lat >= 40) && (lat <= 50)) {
        region = "Midwest";
    }
    else if ((lng <= -67) && (lng >= -105) && (lat >= 30) && (lat <= 40)) {
        region = "South";
    }
    else if (lng <= -105 && lng >= -115 && lat >= 30 && lat <= 50) {
        region = "Mountain";
    }   
    else if (lng <= -115 && lng >= -125 && lat >= 30 && lat <= 50) {
        region = "West";
    }
    else {
        region = "USA";
    }
    x.innerHTML = region;
    document.getElementById('yo').innerHTML = '<h2>Want to be notified when there\'s Ebola news in the ' + region + '? *Yo* us at Ebola' + region + '!</h2><p style="font-size=10px;">(Click to close.)</p>';
    move('.popup')
        .set('height','auto')
        .set('top','0px')
        .duration('1s')
        .end();
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

getLocation();

document.getElementById('yo').onclick = function(e) {
    move('.popup')
        .set('top','-250px')
        .duration('1s')
        .end();
};