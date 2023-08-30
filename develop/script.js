
//City Search
var subBtn = document.getElementById("submitBtn");
const search = document.getElementById("citySearch");
let cityName = document.getElementById("cityName");
let stateName = document.getElementById("stateName");
const countryName = "United States";
let timeEl = document.getElementById("time");
let dateEl = document.getElementById("date");
const todaysHead = document.getElementById("today-heading")

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


var apiKey = "7c006ed91aa6938b8ed4f5598cc3df4c";
var geoApi = "http://api.openweathermap.org/geo/1.0/direct?q=Asheboro&NC&US&limit={limit}&appid=$(apiKey)"

subBtn.addEventListener("click", getWeather())

   function getWeather() {

    var name = cityName;

    if (cityName !== "") {
        todaysHead.innerHTML = "Today's weather in:" + cityName;
    }

    fetch (geoApi)    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}


    
    

