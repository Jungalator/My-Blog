const headerContainer = document.querySelector(".header__container");
const headerLogo = document.querySelector(".header__logo");
const weatherContainer = document.createElement("div");
weatherContainer.className = "weather";

let weatherData;
let weatherSVG;
const weatherURL =
  "https://api.open-meteo.com/v1/forecast?latitude=50.4375&longitude=30.5&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,is_day&timezone=auto";

const renderWeather = (weather) => {
  const date = new Date();
  let weekDay;
  const isDay = weather.current.is_day === 1;
  const code = weather.current.weather_code;
  console.log(code);

  switch (date.getDay()) {
    case 1:
      weekDay = "Monday";
      break;
    case 2:
      weekDay = "Tuesday";
      break;
    case 3:
      weekDay = "Wednesday";
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = "Friday";
      break;
    case 6:
      weekDay = "Saturday";
      break;
    case 0:
      weekDay = "Sunday";
      break;
  }

  if (isDay && [1, 2, 3].includes(code)) {
    weatherSVG = "cloud-sun";
  } else if (isDay && code === 0) {
    weatherSVG = "sun";
  } else if ([51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(code)) {
    weatherSVG = "cloud-rain";
  } else if (!isDay && [1, 2, 3].includes(code)) {
    weatherSVG = "cloud-moon";
  } else if (!isDay && code === 0) {
    weatherSVG = "moon";
  } else if ([95, 96, 99].includes(code)) {
    weatherSVG = "thunder";
  } else if ([45, 48].includes(code)) {
    weatherSVG = "fog";
  } else if ([71, 73, 75, 76].includes(code)) {
    weatherSVG = "snow";
  }
  weatherContainer.insertAdjacentHTML(
    "beforeend",
    `
         <svg class="weather__svg">
            <use xlink:href="public/favicon/sprites.svg#${weatherSVG}"></use>
        </svg>   
<ul class="weather__info-list list">
        <li class="weather__info-item">Ukraine, Kiev</li>
        <li class="weather__info-item">${weekDay}</li>  
        <li class="weather__info-item">${weather.current.temperature_2m} °C</li>

</ul>
        `
  );

  headerContainer.insertBefore(weatherContainer, headerLogo.nextSibling);
};

const getWeatherData = async () => {
  try {
    const response = await fetch(weatherURL);
    weatherData = await response.json();
    console.log(weatherData);
    renderWeather(weatherData);
  } catch (error) {
    console.log("Ошибка определения погоды ", error.message);
  }
};

export default getWeatherData();
