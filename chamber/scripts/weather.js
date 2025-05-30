// Select HTML elements
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// Forecast output element 
const forecastContainer = document.querySelector('.course-a .double-space');

// API info
const myKey = 'ace7b657263d5e033a233b4c57723dcf';
const myLat = "9.09";
const myLong = "7.49";

// URLs
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function getWeather() {
  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentWeatherURL),
      fetch(forecastURL)
    ]);

    if (!currentRes.ok || !forecastRes.ok) throw new Error("API Error");

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    displayCurrent(currentData);
    displayForecast(forecastData);

  } catch (error) {
    console.error("Weather API Error:", error);
  }
}

function displayCurrent(data) {
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `${data.main.temp}&deg;C`;

  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

function displayForecast(data) {
  const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(1, 4);

  let forecastHTML = "";
  forecastList.forEach(item => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString("en-US", { weekday: 'long' });
    const temp = Math.round(item.main.temp);
    forecastHTML += `${day}: <b>${temp}&deg;C</b><br>`;
  });

  forecastContainer.innerHTML = forecastHTML;
}

getWeather();
