$(document).ready(function() {

    // OpenWeatherMap API Key
    var apiKey = 1111111111;

    // Get user's location
    var userLatitude = 0;
    var userLongitude = 0;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLatitude = position.coords.latitude;
            console.log(userLatitude);
            userLongitude = position.coords.longitude;
            console.log(userLongitude);
        });
    }
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&APPID=" + apiKey, function(json) {


        json.forEach(function(val) {
            quoteText += "<i class='fa fa-quote-left' aria-hidden='true'></i> ";
            quoteText += val.quote;
            attributeText += val.attribute;
            newBackgroundColor = val.color;
        });

        $("#quote-text").html(quoteText);
        $("#attribution-text").html(attributeText);
        $('body').css('background-color', newBackgroundColor);
        $('.actions button').css('background-color', newBackgroundColor);
        $('.social ul li').css('background', newBackgroundColor);
    });
});
