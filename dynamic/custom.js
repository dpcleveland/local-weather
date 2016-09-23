$(document).ready(function() {

    // OpenWeatherMap API Key
    var apiKey = "96f6bcd552af365b9711c29cf4e5bdb4";

    $.getJSON("//ip-api.com/json", function(json) {
        function navigator() {

            var userLatitude = json.lat;
            console.log('Latitude : ' + userLatitude);
            var userLongitude = json.lon;
            console.log('Longitude: ' + userLongitude);

            var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&APPID=" + apiKey;
            console.log(openWeatherMapURL);

            $.getJSON(openWeatherMapURL, function(json) {
                var userKelvinTemp = json.main.temp;
                console.log(userKelvinTemp);
                var userFahrenheitTemp = userKelvinTemp * (9/5) - 459.67;
                console.log(userFahrenheitTemp);
                var userCelsiusTemp = userKelvinTemp - 273.15;
                console.log(userCelsiusTemp);
            });
        }
        navigator();
    });
});
