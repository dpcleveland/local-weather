$(document).ready(function() {

    // OpenWeatherMap API Key
    var apiKey = "96f6bcd552af365b9711c29cf4e5bdb4";

    $.getJSON("//ip-api.com/json", function(json) {
        function navigator() {

            // Pull user's location from http://ip-api.com/json
            var userLatitude = json.lat;
            console.log('Latitude : ' + userLatitude);
            var userLongitude = json.lon;
            console.log('Longitude: ' + userLongitude);

            // Input user location into OpenWeatherMap API URL along with key
            var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&APPID=" + apiKey;
            console.log(openWeatherMapURL);

            $.getJSON(openWeatherMapURL, function(json) {

                // Get City
                var userCity = json.name;
                console.log(userCity);

                // Get Temperature & Unit Conversion
                var userKelvinTemp = json.main.temp;
                console.log(userKelvinTemp);
                var userFahrenheitTemp = userKelvinTemp * (9/5) - 459.67;
                console.log(userFahrenheitTemp);
                var userCelsiusTemp = userKelvinTemp - 273.15;
                console.log(userCelsiusTemp);

                // Get Weather
                var userWeatherCondition = json.weather[0].main;
                console.log(userWeatherCondition);
                var userWeatherIcon = json.weather[0].icon;
                console.log(userWeatherIcon);
                var userWeatherIconLink = "http://openweathermap.org/img/w/" + userWeatherIcon + ".png";

                // Update City
                $('#user-location').html(userCity);

                // Update Temperature
                $('#user-temperature').html(userFahrenheitTemp);

                // Update Weather Condition
                $('#user-weather-text').html(userWeatherCondition);

                // Update Weather icon

            });
        }
        navigator();
    });
});
