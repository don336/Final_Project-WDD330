import getElectronics from "./products.js";
import getWeather from "./weather.js";
import cartList from "./cart.js";

const products = new getElectronics();
// console.log(products);
const cart = new cartList()
cart.init();


const weather = new getWeather();
// console.log(weather);
    products.init();
   
    weather.apiFetch();

