const requestUrl = "http://localhost:8080/json/data.json";
export default function buildElectronicCards(data) {
  const ElectronicCards = document.querySelector("#show-content");

  data.Electronics.forEach((electronic) => {
    let div = document.createElement("div");
    div.classList.add("box1");
    let link = document.createElement("a")
    let h4 = document.createElement("p");
    let p1 = document.createElement("p");
    let img = document.createElement("img");
    let btn = document.createElement("button");
    btn.setAttribute("type", "submit")
    btn.classList.add("addToCart");
    link.classList.add("url-p")

    let ElectronicName = `${electronic.ProductName}`;
    let ElectronicID = `${electronic.ProductId}`;

    img.setAttribute("src", electronic.ProductImage);
    img.setAttribute("loading", "lazy");
    link.setAttribute("href", `/detail.html?product=${ElectronicID}`)
    link.classList.add('product_container')
    
    h4.innerHTML = `Product Name: ${ElectronicName}`;
    btn.innerHTML = "Add To Cart";

    div.append(img);
    div.append(h4);
    div.appendChild(p1);
    // div.appendChild(btn)
    link.appendChild(div)

    ElectronicCards.append(link);
  });
}
// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)

  return product
}


export async function findItemById(id){
  let response = await fetch(requestUrl);

  if (response.ok) {
    let data = await response.json();
    const items = data.Electronics

   const found = items.find(data => (data.ProductId === id))

    return found
  }
}
  


export async function convertToJson(res) {
  const data = await res.json()
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: jsonResponse };

  }
}

export function buildWeatherCards(weatherData) {
  const captionDesc = document.querySelector(".container-2");

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const speed = weatherData.wind.speed;
  const temp = weatherData.main.temp;
  const name = weatherData.name;
  const latitude = weatherData.coord.lat;
  const longitude = weatherData.coord.lon;
  let degrees = weatherData.wind.deg;

  let section = document.createElement("section");
  let image = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let h6 = document.createElement("h6");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");

  let description = desc[0].toUpperCase() + desc.slice(1);

  image.setAttribute("src", iconsrc);
  image.setAttribute("alt", desc);
  p1.innerHTML = `<strong>Description:</strong> ${description}`;
  p2.innerHTML = `<strong>Speed:</strong> ${speed}`;
  p3.innerHTML = `<strong>Temperature:</strong> ${temp}`;
  h6.innerHTML = `Weather Forecast for <strong>${name}, GB<strong>`;
  p5.innerHTML = `<strong>Latitude:</strong> ${latitude}`;
  p6.innerHTML = `<strong>Longitude:</strong> ${longitude}`;
  p7.innerHTML = `<strong>${degrees}</strong>&degF`;

  section.appendChild(h6);
  section.appendChild(image);
  section.appendChild(p7);
  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(p3);
  section.appendChild(p5);
  section.appendChild(p6);

  captionDesc.append(section);
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.innerHTML = `<p>${message}</p><span>X</span>`;
  
  alert.addEventListener('click', function(e) {
      if(e.target.tagName == 'SPAN') {
        main.removeChild(this);
      }
  })
  const main = document.querySelector('main');
  main.prepend(alert);

  if(scroll)
    window.scrollTo(0,0);

}