// TODO: Grab API Key for Secondary Conversion API
const apiKey = "31ebe040d9ce338865ece410970e4edd"


// TODO: Register the search button click as submit, prevent default, have the input wiped out as the page is updated

// TODO: Create fetch to translate city/location input to longitude - latitude input for openWeatherMap API

function search(location) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            displayWeather(data.search)
        })
}

// TODO: Create fetch request for Temp, Precip, Humidity, Weather


