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