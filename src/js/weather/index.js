// import { aaa } from '../popular_render';

// console.log(aaa);
import { format } from 'date-fns';
const WEATHER_KEY = 'b61ccf4d4184c2f53b54bff2cbfc4f56';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// const refs = {
//   degs: document.querySelector('.weather__deg'),
//   weather: document.querySelector('.weather__value'),
//   city: document.querySelector('.weather__city'),
//   day: document.querySelector('.weather__day'),
//   year: document.querySelector('.weather__year'),
//   img: document.querySelector('.weather__img'),
// };
let refs = {};
function getWeatherRefs() {
  //   console.log('refs');
  refs = {
    degs: document.querySelector('.weather__deg'),
    weather: document.querySelector('.weather__value'),
    city: document.querySelector('.weather__city'),
    day: document.querySelector('.weather__day'),
    year: document.querySelector('.weather__year'),
    img: document.querySelector('.weather__img'),
  };
  renderWeater();
  getGeoposition();
  return refs;
}

async function fetchWeather() {
  const url = `${BASE_URL}q=London&units=metric&appid=${WEATHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    //  console.log(data);
    return data;
  } catch (error) {
    //  console.log(error);
  }
}

async function fetchWeatherByGeo(lat, lon) {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    //  console.log(error);
  }
}

// console.log(fetchWeather());

async function renderWeater() {
  const data = await fetchWeather();
  const { feels_like } = data.main;
  const weather = data.weather[0];
  const { icon } = data.weather[0];
  refs.degs.textContent = `${Math.floor(feels_like)}°`;
  refs.weather.textContent = weather.main;
  refs.city.textContent = data.name;

  refs.day.textContent = format(new Date(), 'eee');
  refs.year.textContent = format(new Date(), 'dd LLL y');
  refs.img.setAttribute(
    'src',
    `https://openweathermap.org/img/wn/${icon}@4x.png`
  );
}

async function getGeoposition() {
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        fetchWeatherByGeo(latitude, longitude).then(data => {
          const { temp } = data.main;
          const weather = data.weather[0];
          const { icon } = data.weather[0];
          refs.degs.textContent = `${Math.floor(temp)}°`;
          refs.weather.textContent = weather.main;
          refs.city.textContent = data.name;

          refs.day.textContent = format(new Date(), 'eee');
          refs.year.textContent = format(new Date(), 'dd LLL y');
          refs.img.setAttribute(
            'src',
            `https://openweathermap.org/img/wn/${icon}@4x.png`
          );
        });
      }
    );
  }
  return;
}

// getGeoposition();

export { getWeatherRefs };
