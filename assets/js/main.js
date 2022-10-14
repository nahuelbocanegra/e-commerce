const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'Hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'Shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'Sweatshirts',
      quantity: 20
    }
]

//loader
const loader = document.getElementById("loader")
const loaderComponent=()=>{
  setTimeout(() => {
    loader.classList.add("hide")
  },1500)
}

//menu
const menu = document.querySelector(".nav-list")
const iconMenu = document.getElementById("menu-icon")
iconMenu.addEventListener("click", () => {
  menu.classList.toggle("visible")
})
//carrito


const cart = document.getElementById("cart--container")
const openCart = () => cart.classList.remove("hide")
const closeCart = () => cart.classList.add("hide")
const shopIcon=document.getElementById("cart-shop")
const shopCloseIcon =document.getElementById("close-cart")
shopIcon.addEventListener("click", () => {
  openCart()
})
shopCloseIcon.addEventListener("click", () => {
  closeCart()
})


const productos = () => {
    const sectionProduct = document.getElementById("section-producto")
    const Bn = document.querySelectorAll(".Bn")
    let fragment = " "
   
    Bn.forEach((i) => {
      i.addEventListener("click", () => {
        console.log(i)
            fragment=" "
            items.forEach(product => {
                if (product.category === i.id) {
                    fragment += `
        <article class="producto-aside">
               <img src=" ${product.image}" alt="">
                <div class="text-conten" id="${product.id}">
                    <p>${product.price} <span>stock:${product.quantity}</span></p>
                    <h4>${product.name}</h4>
                    <button class="Btn-add">+</button>
                </div>
        </article>  `
                } else if (i.id === "All" ) {
                    fragment += `
        <article class="producto-aside">
               <img src=" ${product.image}" alt="">
                <div class="text-conten" id="${product.id}">
                    <p>${product.price} <span>stock:${product.quantity}</span></p>
                    <h4>${product.name}</h4>
                    <button class="Btn-add">+</button>
                </div>
                
        </article>  `   
                }
            })
            
        sectionProduct.innerHTML = fragment
        cartFunctionaly()
        })
    })
items.forEach(product => {
            fragment += `
        <article class="producto-aside">
               <img src=" ${product.image}" alt="">
                <div class="text-conten" id="${product.id}">
                    <p>${product.price} <span>stock:${product.quantity}</span></p>
                    <h4>${product.name}</h4>
                    <button class="Btn-add">+</button>
                </div>
                
        </article>  `
 })

 sectionProduct.innerHTML = fragment

 cartFunctionaly()
}
let cart1 = []
let contador = 0
function cartFunctionaly() {
  const bt = document.querySelectorAll(".Btn-add")

 
  bt.forEach(button => {
    button.addEventListener("click", e => {
      const id = parseInt(e.target.parentElement.id)
      const selectedproduct = items.find(item => item.id === id)
      

      let index = cart1.indexOf(selectedproduct)
      if (index !== -1) {
        if (cart1[index].quantity <= cart1[index].cantidad) {
          alert("No hay más stock")
        } else {
          cart1[index].cantidad++
          contador ++
          
        }
        
      } else {
        selectedproduct.cantidad = 1
        cart1.push(selectedproduct)
        contador=contador+1
      }
      
      const spanCard = document.getElementById("cart-counter")
      
      spanCard.innerHTML = contador
      showProducts(cart1)

    })
    
  })
  
}


function showProducts(cart1) {
  const carrito = document.getElementById("carrito")
  const total = document.getElementById("total")
  const items = document.getElementById("items")
  let totalcont = 0
  let item = 0
  
  let carro = " "
  
  cart1.forEach((x) => {
    carro += `
        <article class="producto-carrito">
               <img class="imgcarrito" src=" ${x.image}" alt="">
                <div class="text-carrito" id="${x.id}">
                <h4 class="titlecarrito">${x.name}</h4>
                <p class="parracarro">stock:${x.quantity}<span>$${x.price}  </span></p>
                <p class="subtotal">Subtotal:$${x.cantidad * x.price}</p>
                  <p class="textboton">
                    <button class="Btn menos">-</button> ${x.cantidad}  United
                    <button class="Btn más">+</button>
                    <i class='bx bx-trash'></i>
                  <p>
                </div>
                
        </article>
    `
  })
  carrito.innerHTML = carro
  
  cart1.forEach(n => {
    console.log(totalcont)
    console.log(item)
    console.log(n)
    totalcont += n.cantidad * n.price
   item += n.cantidad
  })

  items.innerHTML = `${item} items`

  total.innerHTML = `total:${totalcont}`
  
  
  //local(cart)
  
}
/*
function local(carr) {

  localStorage.setItem("producto",JSON.stringify(carr))
}*/
/*
function sumRes() {
  const Btnmas = document.querySelector(".más")
  const Btnmenos = document.querySelector(".menos")
  Btnmas.addEventListener("click", () => {
    cart.forEach(elemento => {
      elemento.quantity
    })
  })
}*/

//tema
const Theme = document.querySelector("body")
const icontheme = document.getElementById("theme-icon")
icontheme.addEventListener("click", () => {
  Theme.classList.toggle("dark")
  if (icontheme.classList.contains("bx-moon")) {
    icontheme.classList.replace("bx-moon", "bx-sun")
  } else {
    icontheme.classList.replace("bx-sun", "bx-moon")
  }
})
document.addEventListener("DOMContentLoaded", () => {
  loaderComponent()
  productos()
})