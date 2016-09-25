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

                // Get Country
                var userCountry = json.sys.country;
                console.log(userCountry);

                // Get Temperature & Unit Conversion
                var userKelvinTemp = Math.round(json.main.temp);
                console.log(userKelvinTemp);
                var userFahrenheitTemp = Math.round(userKelvinTemp * (9/5) - 459.67);
                console.log(userFahrenheitTemp);
                var userCelsiusTemp = Math.round(userKelvinTemp - 273.15);
                console.log(userCelsiusTemp);

                // Get Weather
                var userWeatherCondition = json.weather[0].main;
                console.log(userWeatherCondition);
                var userWeatherIcon = json.weather[0].icon;
                console.log(userWeatherIcon);
                var userWeatherIconLink = "http://openweathermap.org/img/w/" + userWeatherIcon + ".png";
                console.log(userWeatherIconLink);

                // Update City
                $('#user-location').html(userCity + ', ' + userCountry);

                // Update Temperature
                $('#user-temperature').html(userFahrenheitTemp + '&deg;');

                // Update Weather Condition
                $('#user-weather-text').html(userWeatherCondition);

                // Update Weather Icon
                $('#user-weather-symbol img').attr('src', userWeatherIconLink);

                // Change From F to C
                $('#change-temp-scale').on("click", function(){

                });
            });
        }
        navigator();
    });
});
