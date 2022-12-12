import { findItemById, getParams, getLocalStorage, setLocalStorage } from "./util.js";

const id  = getParams("product")
const product = await findItemById(id)
const container = document.querySelector('.product_detail')

if(product){
  
    const img = document.createElement('img')
    img.setAttribute('src', product.ProductImage)
    img.classList.add("img")
    const div = document.createElement('div')
    div.classList.add('detail')
 
    const par1 = document.createElement('p')
    par1.innerHTML = `Name: ${product.ProductName}`
 
    const par2 = document.createElement('p')
    par2.innerHTML = `Amount: $${product.ProductAmount}`
 
    const par3 = document.createElement('p')
    par3.innerHTML = `Details: ${product.ProductDetails}`
    let par4 = document.createElement("P");
    par4.innerHTML = `Seller: ${product.ProductSeller}`
 
 
    div.appendChild(par1)
    div.appendChild(par2)
    div.appendChild(par3)
    div.appendChild(par4)

    container.appendChild(img)
    container.appendChild(div)

    
 
   }
   const addToCart = document.querySelector(".add-to-cart")
   addToCart.addEventListener('click', (e)=>{
    e.preventDefault()    
        let cartItems = getLocalStorage("so-cart")
        if(!cartItems){
          cartItems = []
        }
        cartItems.push(product);
    
        console.log(product)
        
        setLocalStorage("so-cart", cartItems)

      // const no_of_items = document.querySelector(".cart-items")

      // no_of_items.innerHTML = cartItems.length
      // setLocalStorage("no_of_items", cartItems.length)

      // const res = getLocalStorage("no_of_items")
      // no_of_items.innerHTML = res
        // setTimeout(()=>{
        //   addToCart.setAttribute("value", "Added To Cart")
        // }, 3000 )
      
      
   })
