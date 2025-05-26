async function getWeatherData(lat, lon) {
  const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,is_day&timezone=auto`;
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Ошибка определения погоды ", error.message);
  }
}

export default getWeatherData;
