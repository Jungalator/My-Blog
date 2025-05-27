const headerContainer = document.querySelector(".header__container");
const headerLogo = document.querySelector(".header__logo");

const weatherContainer = document.createElement("div");
weatherContainer.className = "weather";

const renderWeather = (weather, city, country) => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weatherSVG;
  const isDay = weather.current.is_day === 1;
  const code = weather.current.weather_code;

  const weekDay = days[date.getDay()];

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
            <use xlink:href="favicon/sprites.svg#${weatherSVG}"></use>
        </svg>   
<ul class="weather__info-list list">
        <li class="weather__info-item">${country}, ${city}</li>
        <li class="weather__info-item">${weekDay}</li>  
        <li class="weather__info-item">${weather.current.temperature_2m} °C</li>

</ul>
        `
  );

  headerContainer.insertBefore(weatherContainer, headerLogo.nextSibling);
};
export default renderWeather;
