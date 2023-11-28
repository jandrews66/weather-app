
document.addEventListener("DOMContentLoaded", getWeather("vancouver"))

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    getWeather(search.value);
    event.preventDefault();

})

async function getWeather(location){
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6c6dcb07e838483dad800431232211&q=${location}&days=3&aqi=no&alerts=no`, {mode: 'cors'})
        const data = await response.json();
        sortData(data);
    } catch(error) {
        console.log(error)
    }
}

function sortData(data){
    const current = {
        location: data.location.name,
        condition: data.current.condition.text,
        weather: {
            temp: data.current.temp_c,
            "feels like": data.current.feelslike_c,
            wind: data.current.wind_mph,
            humidity: data.current.humidity
        }
    
    };

    const forecast = [
        {
            date: data.forecast.forecastday[0].date,
            avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
            condition: data.forecast.forecastday[0].day.condition.text

        },
        {
            date: data.forecast.forecastday[1].date,
            avgTemp: data.forecast.forecastday[1].day.avgtemp_c,
            condition: data.forecast.forecastday[1].day.condition.text
        },
        {
            date: data.forecast.forecastday[1].date,
            avgTemp: data.forecast.forecastday[2].day.avgtemp_c,
            condition: data.forecast.forecastday[2].day.condition.text
        },

    ]
    renderWeather(current)
    renderForecast(forecast)
}

function renderWeather(weatherObj){
    const condition = document.getElementById("condition")
    condition.innerHTML = weatherObj.condition

    const location = document.getElementById("location")
    location.innerHTML = weatherObj.location

    const weatherList = document.getElementById("weather")
    weatherList.innerHTML = "";

    
    const obj = weatherObj.weather
    for (const [key, value] of Object.entries(obj)){
        const markup = `<li>${key}: ${value}</li>`;
        weatherList.insertAdjacentHTML('beforeend', markup);
    }
}

function renderForecast(forecastArray){
    const forecastList = document.getElementById("forecast")
    forecastArray.forEach(func)
    
    function func(item){
        const markup = `<li>${item.date}${item.condition}</li>`
        forecastList.insertAdjacentHTML('beforeend', markup);

    }
}
