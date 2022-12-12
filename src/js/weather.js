import buildWeatherCards from "./util.js";

const url =
  "`https://api.openweathermap.org/data/2.5/weather?q=London,GB&units=Imperial&appid=cb411365f163ce2a1a5d327896469c7f`";
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

// const axios = require("axios");

// export default class getWeather {
//   constructor() {}
//   async apiFetch() {
//     const options = {
//       method: "GET",
//       url: "https://open-weather13.p.rapidapi.com/city/landon",
//       headers: {
//         "X-RapidAPI-Key": "c421f957dbmsh14658201d2322e4p1312a3jsnb06b87a52f2a",
//         "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         buildWeatherCards();
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }
// }
