export function addDataToDom(processedData) {
  // Weather conditions block
  const weatherCondition = document.querySelector(".js-weather-condition");
  weatherCondition.textContent = processedData.conditions;
  // Add the icon to the weather conditions
  addWeatherIcon(processedData);
  const temp = document.querySelector(".js-temp");
  temp.textContent = `It is: ${processedData.temp} cº now`;
  const feelslike = document.querySelector(".js-feelslike");
  feelslike.textContent = `Feels like: ${processedData.feelslike} cº`;
  const tempMax = document.querySelector(".js-tempmax");
  tempMax.textContent = `Max: ${processedData.tempmax} cº`;
  const tempMin = document.querySelector(".js-tempmin");
  tempMin.textContent = `Min: ${processedData.tempmin} cº`;

  // Precipitation block
  const precip = document.querySelector(".js-precipitation");
  precip.textContent = processedData.precip;

  // Wind speed block
  const windSpeed = document.querySelector(".js-wind-speed");
  windSpeed.textContent = processedData.windspeed;

  // Sunrise Sunset block
  const sunrise = document.querySelector(".js-sunrise");
  sunrise.textContent = processedData.sunrise;
  const sunset = document.querySelector(".js-sunset");
  sunset.textContent = processedData.sunset;

  // UV Index block
  const uvIndex = document.querySelector(".js-uvindex");
  uvIndex.textContent = processedData.uvindex;

  // Humidity block
  const humidity = document.querySelector(".js-humidity");
  humidity.textContent = processedData.humidity;
}

function addWeatherIcon(data) {
 const iconsSources = {
  "clear-day": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/clear-day.svg",
  "clear-night": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/clear-night.svg",
  rain: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/rain.svg",
  cloudy: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/cloudy.svg",
  snow: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/snow.svg",
  fog: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/fog.svg",
  wind: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/wind.svg",
  "partly-cloudy-day": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg",
  "partly-cloudy-night": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/partly-cloudy-night.svg",
};

  const iconName = data.icon;
  console.log(iconName);
  const getIconSrc = () => iconsSources[iconName];
  // const icon = document.createElement("img");
  // icon.src = getIconSrc()

  document.querySelector(".js-icon-img").src = getIconSrc();
}
