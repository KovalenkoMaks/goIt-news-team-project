const WEATHER_KEY = 'b61ccf4d4184c2f53b54bff2cbfc4f56';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const refs = {
  degs: document.querySelector('.weather__deg'),
  weather: document.querySelector('.weather__value'),
  location: document.querySelector('.weather__location'),
};

async function fetchWeather() {
  const url = `${BASE_URL}q=London&units=metric&appid=${WEATHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// console.log(fetchWeather());

async function renderWeater() {
  const data = await fetchWeather();
  console.log(data);
  const { feels_like } = data.main;
  const weather = data.weather[0];
  refs.degs.textContent = `${Math.floor(feels_like)}°`;
  refs.weather.textContent = weather.main;
  refs.location.textContent = data.name;
  console.log(weather);
}
renderWeater();
