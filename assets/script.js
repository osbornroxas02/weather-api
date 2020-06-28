
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var temperature = document.querySelector('.temperature');
var windSpeed = document.querySelector('.wind-speed');
var humidity = document.querySelector('.humidity');
// var uvIndex = document.querySelector('.uv-index');
var description = document.querySelector('.description');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&APPID=fcc06698c8d9b17abe1cc8cff0b51600')

        .then(response => response.json())
        .then(data => {
            console.log(data)

            var nameValue = data['name'];
            var temperatureValue = 'Temperature: ' + data['main']['temp'] + '°f';
            var windSpeedValue = 'Wind Speed: ' + data['wind']['speed'] + 'mph';
            var humidityValue = 'Humidity: ' + data['main']['humidity'];
            var descriptionValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temperature.innerHTML = temperatureValue;
            windSpeed.innerHTML = windSpeedValue;
            humidity.innerHTML = humidityValue;
            // uvIndex.innerHTML = uvIndex;
            description.innerHTML = descriptionValue;


            //5 day forecast 
            var icon = document.querySelector('.forecast-icon');
            var city = document.querySelector('.name');
            //5 day forecast values 
            var iconValue = data['weather'][0]['id'];
            //5 day forecast values call
            forecastDate = document.querySelector('.forecast-date').innerHTML = date;
            forecastTemp = document.querySelector('.forecast-temp').innerHTML = temperatureValue;
            forecastDay = document.querySelector('.forecast-hum').innerHTML = humidityValue;
            icon.innerHTML = iconValue;


            name.innerHTML = nameValue;

        })


    // .catch(err => alert("Wrong city name!"))
});

var today = new Date();
var date = ' (' + (today.getMonth() + 1) + '/' + (today.getDate()) + '/' + (today.getFullYear()) + ')';
document.getElementById('date').innerHTML = date;