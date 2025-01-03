import getApiKey from "./api-key";
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
  };
  console.log(valuableData);
  return valuableData;
}
async function getWeatherDataJson() {
  const responseData = await fetch( `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/united%20states?unitGroup=us&key=${getApiKey()}&contentType=json`);
  const dataInJson = await responseData.json();

  console.log(dataInJson);
  return dataInJson;
}
getWeatherDataJson().then(proccessWeatherDataForDate)
