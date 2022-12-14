import { findItemById, getParams, getLocalStorage, setLocalStorage, alertMessage, deleteMessage } from "./util.js";

const _id  = getParams("product")
const product = await findItemById(_id)
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
   addToCart.addEventListener('click', async (e)=>{
    e.preventDefault()    
        let cartItems = await getLocalStorage("so-cart")
        if(!cartItems){
          cartItems = []
        }
        const found = cartItems.find(data => (data.ProductId === product.ProductId))

        if(!found){
          cartItems.push(product)
          setLocalStorage("so-cart", cartItems)
          alertMessage(`${product.ProductName} has been Added to Cart!`)
          
        } 

        else{
         alert("Product already exists")
        }

        const no_of_items = document.querySelector(".cart-items")
  
          no_of_items.innerHTML = cartItems.length
         setLocalStorage("no_of_items", cartItems.length)
       
       

      // const res = getLocalStorage("no_of_items")
      // no_of_items.innerHTML = res
        // setTimeout(()=>{
        //   addToCart.setAttribute("value", "Added To Cart")
        // }, 3000 )
      
      
   })
   const removeItem = document.querySelector('.removeItem')
   removeItem.addEventListener('click', (e)=>{
    e.preventDefault()
    deleteItem(_id)
   })

 async function deleteItem(id){
      let cartItems = await getLocalStorage("so-cart")
      cartItems.forEach(function(item, index){
        if(id === item.ProductId){
          cartItems.splice(index, 1)
        }
      })
   
        setLocalStorage("so-cart", cartItems)
        deleteMessage(`${product.ProductName} has been Deleted!`)
        const no_of_items = document.querySelector(".cart-items")
     
          no_of_items.innerHTML = cartItems.length
   }



