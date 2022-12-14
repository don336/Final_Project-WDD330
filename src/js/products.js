import buildElectronicCards, {getLocalStorage} from "./util.js";


const requestUrl = "http://localhost:8080/json/data.json";

export default class getElectronics {
  constructor(prodId) {
    this.products = {}
  }
  async init() {
    
    let response = await fetch(requestUrl);
    if (response.ok) {
      let data = await response.json();
      buildElectronicCards(data);
    } else {
      throw Error(response.statusText);
    }
  
  }
}
