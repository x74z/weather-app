import getE from "./api-key";
import "./styles.css";

function proccessWeatherDataForDate(data) {
  // function getIndexOfDate(date){ }
  // const processedDate = getIndexOfDate(date);

  // 0 is today, 1 tomorrow...
  const date = 0;

  const valuableData = {
    conditions: data.days[date].conditions,
    icon: data.days[date].icon,
    feelslike: data.days[date].feelslike,
    precipitation: data.days[date].precip,
    temp: data.days[date].temp,
    tempmax: data.days[date].tempmax,
    tempmin: data.days[date].tempmin,
    uvindex: data.days[date].uvindex,
    sunrise: data.days[date].sunrise,
    sunset: data.days[date].sunset,
    visibility: data.days[date].visibility,
  };
  console.log(valuableData);
  return valuableData;
}
function formatLocationForUrl(location){
  return location.replaceAll(' ', '%20');
}
async function getWeatherDataJson(locationInput) {
  const location = formatLocationForUrl(locationInput);
  const responseData = await fetch( `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${getE()}&contentType=json`);
  const dataInJson = await responseData.json();

  console.log(dataInJson);
  return dataInJson;
}

(()=>{
  const weatherForm = document.querySelector(".js-weather-location-form")
  weatherForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeatherDataJson(weatherForm.location.value).then(proccessWeatherDataForDate)

  })
})();
