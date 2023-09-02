
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
        var name = localStorage.getItem("Asheboro")
        search.innerHTML = name;
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
    if (!cityName) return;

    var apiKey1 = `58f46e928881407740f79f4c8040c421`;
    const apiUrlToday = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey1}&units=imperial`
    

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

    // localStorage.setItem() {
        getHistory();

    })

        // Future Forecast

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let cityName = cityInput.value;
    // let state = stateName.value;
    if (!cityName) return;

    var apiKey1 = `7c006ed91aa6938b8ed4f5598cc3df4c`;
    const apiUrlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey1}&units=imperial`;
    
// Day 1
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);
        //DATE
        document.getElementById("day1").innerHTML = `${data.list[5].dt_txt}`;
        //ICON
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`);
        //TEMP
        document.getElementById("temp1").textContent = `Temperature: ${data.list[5].main.temp}°F`;
        //HUMIDITY
        document.getElementById("humidity1").innerHTML = `Humidity: ${data.list[5].main.humidity}%`;
        //WIND SPEED
        document.getElementById("wind-speed1").innerHTML = `Wind Speed: ${data.list[5].wind.speed} m/s`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }

    // Day 2
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day2").innerHTML = `${data.list[13].dt_txt}`;
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`);
        document.getElementById("temp2").textContent = `Temperature: ${data.list[13].main.temp}°F`;
        document.getElementById("humidity2").innerHTML = `Humidity: ${data.list[13].main.humidity}%`;
        document.getElementById("wind-speed2").innerHTML = `Wind Speed: ${data.list[13].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }
    
    // Day 3
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day3").innerHTML = `${data.list[21].dt_txt}`;
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`);
        document.getElementById("temp3").textContent = `Temperature: ${data.list[21].main.temp}°F`;
        document.getElementById("humidity3").innerHTML = `Humidity: ${data.list[21].main.humidity}%`;
        document.getElementById("wind-speed3").innerHTML = `Wind Speed: ${data.list[21].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }
    
    // Day 4
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day4").innerHTML = `${data.list[29].dt_txt}`;
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`);
        document.getElementById("temp4").textContent = `Temperature: ${data.list[29].main.temp}°F`;
        document.getElementById("humidity4").innerHTML = `Humidity: ${data.list[29].main.humidity}%`;
        document.getElementById("wind-speed4").innerHTML = `Wind Speed: ${data.list[29].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }
    
    // Day 5
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);
        
        document.getElementById("day5").innerHTML = `${data.list[37].dt_txt}`;
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`);
        document.getElementById("temp5").textContent = `Temperature: ${data.list[37].main.temp}°F`;
        document.getElementById("humidity5").innerHTML = `Humidity: ${data.list[37].main.humidity}%`;
        document.getElementById("wind-speed5").innerHTML = `Wind Speed: ${data.list[37].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.textContent = 'Weather data not available';
        humidity.textContent = '';
        windSpeed.textContent = '';
    }
})