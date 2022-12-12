import getElectronics from "./products.js";
import getWeather from "./weather.js";

const products = new getElectronics();
// console.log(products);



const weather = new getWeather();
// console.log(weather);
    products.init();
   
    weather.apiFetch();

