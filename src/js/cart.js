import {getLocalStorage} from './util.js'

export default class cartList {
    constructor(){
        this.total = 0
    }

    async init() {
        const product = await getLocalStorage("so-cart")
        this.createTemplate(product)
        this.calculateTotal(product)
     
  
    }

    createTemplate(product){
        const parent  = document.querySelector(".productDesc")

         const renderTemplate = product.forEach((item)=>{
            const par = document.createElement("p")
            
            par.innerHTML = `${item.ProductName}`

            const span = document.createElement('span')
            span.classList.add("price")

            span.innerHTML = `${item.ProductAmount}`
       
            par.appendChild(span)
            parent.appendChild(par)
         })

         return renderTemplate
    }

    calculateTotal(product){
        const amounts = product.map((item)=> parseInt(item.ProductAmount));
        this.total = amounts.reduce((sum, item)=> {return sum + item}, 0) 
        document.querySelector(".amount").innerHTML = `$${this.total}`
      
    }
}