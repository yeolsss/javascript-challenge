const weather = document.querySelector('#weather__text');
const city = document.querySelector('#weather__city');
const weatherImg = document.querySelector('#weather__icon');
const API_KEY = '12bf68b50ab548245800f4509d8a3f9d';
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.querySelector('#weather__lat').innerText = `lat: ${lat}`;
  document.querySelector('#weather__lon').innerText = `lon: ${lon}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `City: ${data.name}`;
      weather.innerText = `${data.main.temp}`;
      weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherImg.alt = `${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
