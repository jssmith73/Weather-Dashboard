
//City Search
var subBtn = document.getElementById("submitBtn");
const search = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");
let stateName = document.getElementById("stateName");
const countryName = "United States";
let timeEl = document.getElementById("time");
let dateEl = document.getElementById("date");
let todaysHead = document.getElementById("today-heading");
let log = document.getElementById("city-log");


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Time and date set

setInterval(() => {
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
const ampm = hour > 12 ? "PM" : "AM"
var month = time.getMonth();
var date = time.getDate();
var year = time.getFullYear();

timeEl.innerHTML = hour + ":" + min;

dateEl.innerHTML = months[month] + " " + date + ", " + year

},1000 );

function getHistory () {
    const btn = document.createElement("button");
    btn.innerText = localStorage.getItem("City");
    document.getElementById("city-log").appendChild(btn);

    btn.addEventListener("click", function() {
        search.value = ["City"]
})
}

getHistory();

const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
let icon = document.getElementById("weather-icon");

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();


    
    let cityName = cityInput.value;
    let state = stateName.value;
    if (!cityName) return;

    var apiKey1 = `7c006ed91aa6938b8ed4f5598cc3df4c`;
    const apiUrlToday = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey1}&units=imperial`;
    // var apiUrlDays = `api.openweathermap.org/data/2.5/forecast?q=${cityName},${state},${countryName}&appid=${apiKey1}`

    try {
        const response = await fetch(apiUrlToday);
        const data = await response.json();

        console.log(data);
        console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.textContent = `Temperature: ${data.main.temp}°F`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        todaysHead.innerHTML = "Today in " + cityName;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }

    function updateHead() {
        todaysHead = "Today's Weather in " + cityName;
        }
        
        updateHead();

    //Future Forecast

    try {
        const response = await fetch(apiUrlToday);
        const data = await response.json();

        console.log(data);
        console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.textContent = `Temperature: ${data.main.temp}°F`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        localStorage.setItem("City", cityName);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }
    


    // localStorage.setItem() {

    }
);


    

