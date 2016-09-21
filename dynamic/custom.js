$(document).ready(function() {

    // OpenWeatherMap API Key
    var apiKey = "96f6bcd552af365b9711c29cf4e5bdb4";

    if (navigator.geolocation) {
        var navigatorOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function navigatorSuccess(pos) {
            var crd = pos.coords;

            var userLatitude = crd.latitude;
            console.log('Latitude : ' + crd.latitude);
            var userLongitude = crd.longitude;
            console.log('Longitude: ' + crd.longitude);

            var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&APPID=" + apiKey;
            console.log(openWeatherMapURL);

            $.getJSON(openWeatherMapURL, function(json) {

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
        }

        function navigatorError(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        navigator.geolocation.getCurrentPosition(navigatorSuccess, navigatorError, navigatorOptions);


    }
    else {
        // Tell user to turn on geo location
    }
});
