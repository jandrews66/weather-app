import './style.css';
import { format } from 'date-fns'

let measurement = "°C";
let current = {};
let forecast = [];
const errorMsg = document.getElementById("errorMsg");
document.addEventListener("DOMContentLoaded", getWeather("vancouver"))

async function getWeather(location){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c6dcb07e838483dad800431232211&q=${location}&days=3&aqi=no&alerts=no`)
        const data = await response.json();
        sortData(data);
    } catch(error) {
        console.log(error)
        errorMsg.classList.add("error")
        errorMsg.textContent = "Location not found, please try again."
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    getWeather(search.value);
    event.preventDefault();
    form.reset();
    errorMsg.textContent = "";
    errorMsg.className = "";
})

function sortData(data){
    current = {
        location: data.location.name,
        condition: data.current.condition.text,
        icon_code: data.current.condition.icon,
        weather: {
            temp: data.current.temp_c,
            "feels like": data.current.feelslike_c,
            wind: data.current.wind_mph + "mph",
            humidity: data.current.humidity + "%"
        }
    
    };

    forecast = [
        {
            //use date-fn to format date to display as day of the week e.g. Monday
            date: format(new Date(data.forecast.forecastday[0].date), "eeee"),
            avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
            condition: data.forecast.forecastday[0].day.condition.text,
            icon_code: data.forecast.forecastday[0].day.condition.icon

        },
        {
            date: format(new Date(data.forecast.forecastday[1].date), "eeee"),
            avgTemp: data.forecast.forecastday[1].day.avgtemp_c,
            condition: data.forecast.forecastday[1].day.condition.text,
            icon_code: data.forecast.forecastday[1].day.condition.icon

            
        },
        {
            date: format(new Date(data.forecast.forecastday[2].date), "eeee"),
            avgTemp: data.forecast.forecastday[2].day.avgtemp_c,
            condition: data.forecast.forecastday[2].day.condition.text,
            icon_code: data.forecast.forecastday[2].day.condition.icon

        },

    ]
    renderWeather()
    renderForecast()
}

function renderWeather(){
    let currentObj = current;
    const condition = document.getElementById("condition")
    condition.innerHTML = currentObj.condition

    const location = document.getElementById("location")
    location.innerHTML = currentObj.location

    const weatherList = document.getElementById("weather")
    weatherList.innerHTML = "";

    const iconContainer = document.getElementById("conditionIcon")
    iconContainer.innerHTML = "";
    const iconMarkup = `<img src=${editIconUrl(currentObj.icon_code)}>`
    iconContainer.insertAdjacentHTML('beforeend', iconMarkup)

    const weatherObj = currentObj.weather
    for (const [key, value] of Object.entries(weatherObj)){
        if (key == "temp" || key == "feels like"){
            let num = value;
            if (measurement == "°F"){
                num = convertCF(value)
            }
            const markup = `<li>${key}: ${num}${measurement}</li>`;
            weatherList.insertAdjacentHTML('beforeend', markup);

        } else {
            const markup = `<li>${key}: ${value}</li>`;
            weatherList.insertAdjacentHTML('beforeend', markup);


        }
    }
}

function renderForecast(){
    let forecastArray = forecast;
    const forecastList = document.getElementById("forecast")
    forecastList.innerHTML = "";
    forecastArray.forEach(render)
    
    function render(item){
        let num = item.avgTemp;
        if (measurement == "°F"){
            num = convertCF(item.avgTemp)
        }
        const markup = `<li><p>${item.date}</p><img src="${editIconUrl(item.icon_code)}"><p>${num}${measurement}</p><p>${item.condition}</p></li>`
        forecastList.insertAdjacentHTML('beforeend', markup);

    }
}

function convertCF(num){
    let sum = (num * 9/5) + 32;
    return Math.round(sum * 10) / 10;
}
function editIconUrl(url){
    return url.replace("//cdn.weatherapi.com/weather/64x64/", "/assets/icon/")
}

const toggleTemp = document.getElementById("toggleTemp")
toggleTemp.innerHTML = measurement;
toggleTemp.addEventListener('click', toggle)

function toggle(){
    measurement = measurement === "°C" ? "°F" : "°C";
    toggleTemp.innerHTML = measurement
    renderWeather();
    renderForecast();
}