import {getLocalStorage} from './util.js'

export default class cartList {
    constructor(){
        this.total = 0
    }

    async init() {
        const product = await getLocalStorage("so-cart")
        console.log(product)
        this.createTemplate(product)
        this.calculateTotal(product)
    }

    createTemplate(product){
        const parent  = document.querySelector(".productDesc")

         const renderTemplate = product.forEach((item)=>{
            const link = document.createElement('a')
            link.setAttribute("href", `/detail.html?product=${item.ProductId}`)
            link.classList.add("delbtn")
            const par = document.createElement("p")
            
            par.innerHTML = `${item.ProductName} <i class="fa-solid fa-trash"></i>`

            const span = document.createElement('span')
            span.classList.add("price")

            span.innerHTML = `${item.ProductAmount}`
       
            par.appendChild(span)
            link.appendChild(par)
            parent.appendChild(link)
         })

         return renderTemplate
    }

    calculateTotal(product){
        const amounts = product.map((item)=> parseInt(item.ProductAmount));
        this.total = amounts.reduce((sum, item)=> {return sum + item}, 0) 
        document.querySelector(".amount").innerHTML = `$${this.total}`
      
    }
}

