document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');

    getWeatherBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            getWeather(city);
        }
    });

    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = `Temperature: ${data.main.temp} °C`;
                    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
                    weatherInfo.classList.remove('hidden');
                } else {
                    alert('City not found. Please try again.');
                }
            })
            .catch(error => {
                alert('Error fetching weather data. Please try again.');
                console.error('Error:', error);
            });
    }
});
