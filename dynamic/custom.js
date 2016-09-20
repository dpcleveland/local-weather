$(document).ready(function() {

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

    $("#new-quote").on("click", function(){
        $.getJSON("/dynamic/json/quotes.json", function(json) {
            var quoteText = "";
            var attributeText = "";
            var totalQuotes = json.length;
            var newBackgroundColor = "";

            function randomQuote() {
                return Math.floor(Math.random() * (totalQuotes));
            }
            var chosenQuote = randomQuote();
            console.log(chosenQuote);

            json = json.filter(function(val) {
                return (val.id == chosenQuote);
            });

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
});
