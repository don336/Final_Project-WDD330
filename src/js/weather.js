import { buildWeatherCards } from "./util.js";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London,GB&units=Imperial&appid=cb411365f163ce2a1a5d327896469c7f";
export default class getWeather {
  constructor() {}
  async apiFetch() {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      buildWeatherCards(data);
    } else {
      throw Error(response.statusText);
    }
  }
}