//DATE

let now = new Date();

//current time
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let showTime = document.querySelector("#currentTime");
showTime.innerHTML = `${hours}:${minutes}`;

//current date
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();

let showDate = document.querySelector("#currentDate");
showDate.innerHTML = `${month}, ${date}`;

//current day

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let showDay = document.querySelector("#currentDay");
showDay.innerHTML = day;
//end of date

//searching the city

function outputInfoCity(response) {
  let temp = document.querySelector("#temperature-celsius");
  temp.innerHTML = Math.round(response.data.main.temp);

  let hum = document.querySelector("#humidity");
  hum.innerHTML = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  //console.log(response);
  let city = document.querySelector("#currentCity");
  currentCity.innerHTML = response.data.name;
}
//seaching the city by coordinates
function retrievePosition(position) {
  let apiKey = "5cd3854388db274e217fd69a4769c1e5";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCoord).then(outputInfoCity);
}

function searchForm(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input");
  let apiKey = "5cd3854388db274e217fd69a4769c1e5";
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCity).then(outputInfoCity);
}

let form = document.querySelector("#searching-city");
form.addEventListener("submit", searchForm);

function current(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentCoord = document.querySelector("#current-coord");
currentCoord.addEventListener("click", current);

//Converting Celsius to Fahrenheit

//function convertToFahrenheit(event) {
//  event.preventDefault();
//  let celsius = document.querySelector("#temperature-celsius");

//  celsius.innerHTML = "98";
//}

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", convertToFahrenheit);

//Converting Fahrenheit to Celsius

//function convertToCelsius(event) {
//  event.preventDefault();
//  let fahrenheit = document.querySelector("#temperature-celsius");
//
//  fahrenheit.innerHTML = "31";
//}

//let celsius = document.querySelector("#celsius");
//celsius.addEventListener("click", convertToCelsius);

//let apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}=metric`;
