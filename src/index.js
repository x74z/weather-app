import "./styles.css";
import { addDataToDom } from "./add-data-to-dom.js";
import { getWeatherDataJson, proccessWeatherDataForDate } from "./getting-weather-data.js";

(() => {
  const weatherForm = document.querySelector(".js-weather-location-form");
  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    getWeatherDataJson(weatherForm.location.value)
      .then(proccessWeatherDataForDate)
      .then(addDataToDom)


      .catch((error) => {
        // Show the error on this element, so it doesnt break
        document.querySelector(".js-weather-condition").textContent =
          error.message;
      });
  });
})();
