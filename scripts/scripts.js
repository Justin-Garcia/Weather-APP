const apiKey = "31ebe040d9ce338865ece410970e4edd"
const inputEl = document.getElementById('inputSearch')
const searchBtn = document.getElementById('searchBtn')
const temp = document.getElementById('degrees')
const feelsLike = document.getElementById('feelsLike')
const precipitation = document.getElementById('precipitation')

function getWeather(city) {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            displayWeather(data)
        })
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    console.log(data)
    var currentWeather = document.getElementById('weather');
    var additionalWeather = document.getElementById('additionalInfo');
    var forecastDiv = document.getElementById('scroller__inner');
    // forecastDiv.innerHTML = ''; // Clear previous forecast

    // Display current weather
    var current = data.list[0];
    currentWeather.innerHTML = `
    <h2><span id="degrees">${current.main.temp}°F</span></h2>
    <h2>Feels Like: <span id="feelsLike">${current.main.feels_like}°F</span></h2>
    `;
    // Display additional weather info
    additionalWeather.innerHTML = `  
    <h1>${current.weather[0].main}</h1>
    <img id="wicon" src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="">
    <h2>${current.wind.speed} MPH Wind Speed</h2>
    <h2>Humidity: ${current.main.humidity}%</h2>
    `;

    // Display 5-day forecast
    var forecast = data.list[0];
    for (let i = 1; i <= 5; i++) {
    var card = document.createElement('li');
    card.className = 'scroller__item';
    card.innerHTML = `
    <p>${current.main.temp}°F</p>
    <img id="wicon" src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="">
                `;
    forecastDiv.appendChild(card);
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var city = inputEl.value;
    getWeather(city);
});

