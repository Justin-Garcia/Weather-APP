const apiKey = "31ebe040d9ce338865ece410970e4edd"
const inputEl = document.getElementById(inputSearch)
const searchBtn = document.getElementById(searchBtn)
const temp = document.getElementById(degrees)
const feelsLike = document.getElementById(feelsLike)
const precipitation = document.getElementById(precipitation)


// TODO: Create fetch to translate city/location input to longitude - latitude input for openWeatherMap API

function search(locationConverter) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            convertLocation(data.search)
        })
}



function search(location) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            displayWeather(data.search)
        })
}

function displayWeather(data) {
    console.log(data)
    
}


// TODO: Create fetch request for Temp, Precip, Humidity, Weather


searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const search = inputEl.value
    displayWeather(search)
})