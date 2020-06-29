
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.getElementById('cityName')
var temperature = document.querySelector('.temperature');
var windSpeed = document.querySelector('.wind-speed');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uv-index');
var description = document.querySelector('.description');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=fcc06698c8d9b17abe1cc8cff0b51600')
        .then(response => response.json())
        .then(data => {

            var nameValue = data.name
            cityName.innerHTML = nameValue + date;
            console.log('this is the name value: ', nameValue)
            console.log('this is the data value: ', data)

            var temperatureValue = 'Temperature: ' + data['main']['temp'] + ' °F';
            var windSpeedValue = 'Wind Speed: ' + data['wind']['speed'] + ' MPH';
            var humidityValue = 'Humidity: ' + data['main']['humidity'] + ' %';
            var descriptionValue = data['weather'][0]['description'];

            temperature.innerHTML = temperatureValue;
            windSpeed.innerHTML = windSpeedValue;
            humidity.innerHTML = humidityValue;
            description.innerHTML = descriptionValue;

            //UV Index Function
            fetch('http://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&units=imperial&appid=fcc06698c8d9b17abe1cc8cff0b51600')
                .then(response => response.json())
                .then(data => {
                    console.log('this is the UV data value: ', data)

                    var uvIndexValue = data['value'];
                    uvIndex.innerHTML = uvIndexValue;
                    name.innerHTML = nameValue;

                    //5 day forecast : unfinished - couldn't find the 5day forecast on weather app
                    var icon = document.querySelector('.forecast-icon');
                    var city = document.querySelector('.name');

                    forecastDate = document.querySelector('.forecast-date').innerHTML = date;
                    forecastTemp = document.querySelector('.forecast-temp').innerHTML = temperatureValue;
                    forecastDay = document.querySelector('.forecast-hum').innerHTML = humidityValue;
                })
                .catch(err => alert("Wrong city name!"));
            localStorage.setItem(nameValue, data);
            console.log('this is the local storage', localStorage)
        });
});

var today = new Date();
var date = ' (' + (today.getMonth() + 1) + '/' + (today.getDate()) + '/' + (today.getFullYear()) + ')';