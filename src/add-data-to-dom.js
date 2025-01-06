// The values in which they are measured
// Weather Variable	Measurement Unit
// Temperature, Heat Index & Wind Chill	Degrees Celcius
// Precipitation	Millimeters
// Snow	Centimeters
// Wind & Wind Gust	Kilometers Per Hour
// Visibility	Kilometers
// Pressure	Millibars (Hectopascals)
// Solar Radiation 	W/m2
// Solar Energy 	MJ/m2
// Soil Moisture 	Millimeters
export function addDataToDom(processedData) {
  // Weather conditions block
  const weatherCondition = document.querySelector(".js-weather-condition");
  weatherCondition.textContent = processedData.conditions;
  // Add the icon to the weather conditions
  addWeatherIcon(processedData);
  const temp = document.querySelector(".js-temp");
  temp.textContent = `${processedData.temp} cº`;
  const feelslike = document.querySelector(".js-feelslike");
  feelslike.textContent = `Feels like: ${processedData.feelslike} cº`;
  const tempMax = document.querySelector(".js-tempmax");
  tempMax.textContent = `Max: ${processedData.tempmax} cº`;
  const tempMin = document.querySelector(".js-tempmin");
  tempMin.textContent = `Min: ${processedData.tempmin} cº`;


  // Adding the background image to the website
  setBackgroundImage(processedData)

  // Precipitation block
  const precip = document.querySelector(".js-precipitation");
  precip.textContent = processedData.precip;

  // Wind speed block
  const windSpeed = document.querySelector(".js-wind-speed");
  windSpeed.textContent = `${processedData.windspeed} km/h`;

  // Sunrise Sunset block
  const sunrise = document.querySelector(".js-sunrise");
  sunrise.textContent = `Sunrise at ${processedData.sunrise}`;
  const sunset = document.querySelector(".js-sunset");
  sunset.textContent = `Sunset at ${processedData.sunset}`;

  // UV Index block
  const uvIndex = document.querySelector(".js-uvindex");
  uvIndex.textContent = processedData.uvindex;

  // Humidity block
  const humidity = document.querySelector(".js-humidity");
  humidity.textContent = `${processedData.humidity}%`;

  // visibility block
  const visibility = document.querySelector(".js-visibility");
  visibility.textContent = `${processedData.visibility} km`;

  // This removes the weather--invisible class, the point of that class is to not show the titles before searching the weather
  document.querySelector(".weather").classList.remove("weather--invisible");
}

function addWeatherIcon(data) {
 const iconsSources = { "clear-day": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/clear-day.svg", "clear-night": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/clear-night.svg", rain: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/rain.svg", cloudy: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/cloudy.svg", snow: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/snow.svg", fog: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/fog.svg", wind: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/wind.svg", "partly-cloudy-day": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg", "partly-cloudy-night": "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/partly-cloudy-night.svg" };

  const iconName = data.icon;
  // console.log(iconName);
  const getIconSrc = () => iconsSources[iconName];
  // const icon = document.createElement("img");
  // icon.src = getIconSrc()

  document.querySelector(".js-icon-img").src = getIconSrc();
}

function setBackgroundImage(data){
 const backgroundImageClasses = { "clear-day": `body--`, "clear-night": `body--`, rain: `body--`, cloudy: `body--`, snow: `body--`, fog: `body--`, wind: `body--`, "partly-cloudy-day": `body--`, "partly-cloudy-night": `body--` };
  // First reset the classes added
  document.querySelector("body").classList = "body"

  const weather = data.icon // const getBackgroundImageClass = () => backgroundImageClasses[weather];
  document.querySelector("body").classList.add(`body--${weather}`);
}
