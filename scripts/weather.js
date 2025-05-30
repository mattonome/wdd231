// scripts/weather.js

// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL for Trier, Germany (lat: 49.75, lon: 6.64) using metric units
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=ace7b657263d5e033a233b4c57723dcf';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

apiFetch();
