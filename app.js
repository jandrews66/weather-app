
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
        temp: data.current.temp_c,
        feels: data.current.feelslike_c,
        wind: data.current.wind_mph,
        humidity: data.current.humidity
    };

    const forecast = {
        location: data.location.name,
        dayOne: {
            avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
            condition: data.forecast.forecastday[0].day.condition.text

        },
        dayTwo: {
            avgTemp: data.forecast.forecastday[1].day.avgtemp_c,
            condition: data.forecast.forecastday[1].day.condition.text
        },
        dayThree: {
            avgTemp: data.forecast.forecastday[2].day.avgtemp_c,
            condition: data.forecast.forecastday[2].day.condition.text
        },

    }
    console.log(currentWeather);
    console.log(forecast)
}
