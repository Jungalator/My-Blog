import getCurrentGeo from "./geo.js";
import getCurrentLocation from "./location.js";
import getWeatherData from "./weather.js";
import renderWeather from "./render.js";

async function startWeatherApp() {
  const { lat, lon } = await getCurrentGeo();
  const { city, country } = await getCurrentLocation(lat, lon);
  const weather = await getWeatherData(lat, lon);

  renderWeather(weather, city, country);
}

export default startWeatherApp();
