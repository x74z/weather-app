import getE from "./get.js";

export function proccessWeatherDataForDate(data) {
  // function getIndexOfDate(date){ }
  // const processedDate = getIndexOfDate(date);

  // 0 is today, 1 tomorrow...
  // conditions: data.days[date].conditions,
  const date = 0;

  const currentData = {
    conditions: data.currentConditions.conditions,
    icon: data.currentConditions.icon,
    feelslike: data.currentConditions.feelslike,
    precip: data.currentConditions.precip,
    humidity: data.currentConditions.humidity,
    temp: data.currentConditions.temp,

    // Todays tempmax and min
    tempmax: data.days[0].tempmax,
    tempmin: data.days[0].tempmin,

    windspeed: data.currentConditions.windspeed,
    uvindex: data.currentConditions.uvindex,
    sunrise: data.currentConditions.sunrise,
    sunset: data.currentConditions.sunset,
    visibility: data.currentConditions.visibility,
  };
  console.log(currentData);
  return currentData;
}
function formatLocationForUrl(location){
  return location.replaceAll(' ', '%20');
}
export async function getWeatherDataJson(locationInput) {
  const location = formatLocationForUrl(locationInput);
  const responseData = await fetch( `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${getE()}&contentType=json`);
  const dataInJson = await responseData.json();

  console.log(dataInJson);
  return dataInJson;
}
