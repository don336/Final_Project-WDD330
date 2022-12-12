const requestUrl = "";
const ElectronicCards = document.querySelector(".cards");

async function getElectronics() {
  let response = await fetch(requestUrl);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    buildElectronicCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildElectronicCards(data) {
  data.Electronics.forEach((electronic) => {
    let card = document.createElement("section");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let img = document.createElement("img");

    let ElectronicName = `${electronic.ProductName}`;
    let ElectronicId = `${electronic.ProductId}`;
    let ElectronicAmount = `${electronic.ProductAmount}`;
    let ElectronicDetails = `${electronic.ProductDetails}`;
    let ElectronicSeller = `${electronic.ProductSeller}`;

    img.setAttribute("src", electronic.ProductImage);
    img.setAttribute("loading", "lazy");
    h4.innerHTML = `Product Name: ${ElectronicName}`;
    p1.innerHTML = `Product Id: ${ElectronicId}`;
    p2.innerHTML = `Product Amount: ${ElectronicAmount}`;
    p3.innerHTML = `Product Details: ${ElectronicDetails}`;
    p4.innerHTML = `Product Seller: ${ElectronicSeller}`;

    card.append(img);
    card.append(h4);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

    ElectronicCards.append(card);
  });
}

getElectronics();
