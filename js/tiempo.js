$(document).ready(function() {
    var apiKey = ''; // Pon tu api aqui
    var city = ''; // Pon tu localidad aqui

    function updateWeather() {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey, function(data) {
            var description = data.weather[0].description;
            var temp = data.main.temp;
            var weatherIcon = document.getElementById('weather-icon');
            $('#weather-temp').html(Math.round(temp) + '°C');
            
            if (description === "clear sky") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/979/979585.png';
            } else if (description === "scattered clouds" || description === "overcast clouds" || description === "broken clouds" || description === "few clouds") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163763.png';
            } else if (description === "shower rain" || description === "rain") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/3520/3520902.png';
            } else if (description === "thunderstorm") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146799.png';
            } else if (description === "snow") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/642/642000.png';
            } else if (description === "mist") {
                weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/2446/2446001.png';
            }
            
        });
    }
    setInterval(updateWeather, 10000);
    updateWeather();
});


