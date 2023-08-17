if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready())
} else {
    ready()
}

function ready() {
    const likeButton = document.getElementsByClassName('btn_like')
    for (let i = 0; i < likeButton.length; i++) {
        let like = likeButton[i];
        like.addEventListener('click', function(event) {
            like.classList.toggle('btn_like_color')
        })
    }

    const removeItem = document.getElementsByClassName("btn_remove")
    for (let i = 0; i < removeItem.length; i++) {
        let button = removeItem[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateTotalPrice()
        }) 
    }

    const addItem = document.getElementsByClassName('btn_add')
    for (let i = 0; i < addItem.length; i++) {
        let toCart = addItem[i];
        toCart.addEventListener('click', function(event) {
            let title = toCart.parentElement.parentElement.parentElement.getElementsByClassName('ps5_text')[0].innerText
            let price = toCart.parentElement.parentElement.parentElement.getElementsByClassName('ps5_price')[0].getElementsByClassName('price_text')[0].innerText
            addToCart(title, price)
            updateTotalPrice()
        }) 
    }
}

function addToCart(title, price) {
    let cartList = document.getElementsByClassName('cart_items')[0]
    let cartListNames = cartList.getElementsByClassName('ps5_text')
    for (let i = 0; i < cartListNames.length; i++) {
        let names = cartListNames[i].innerText;
        if(names == title) {
            return
        }
    }
    let createItem = document.createElement('div')
    createItem.classList.add('items')
    let itemBody = `
    <p class="ps5_text">${title}</p>
    <div class="ps5_price">
     <p class="price_text">${price}</p> 
     <p class="quantity_text quantity">Quantity: 1</p>
     <button class="sub">-</button>
     <button class="add">+</button>
     <button class="btn_remove">Remove Item</button>
    </div>`
    createItem.innerHTML = itemBody
    cartList.appendChild(createItem)
    createItem.getElementsByClassName('add')[0].addEventListener('click', function(event) {
        let quantity_value = event.target.parentElement.getElementsByClassName('quantity_text')[0];
        console.log(quantity_value);
        let currentQuantity = parseInt(quantity_value.innerText.replace('Quantity: ', ''));
        let newQuantity = currentQuantity + 1;
        quantity_value.innerText = `Quantity: ${newQuantity}`;
        console.log(quantity_value.innerText);
        updateTotalPrice();        
    })

    createItem.getElementsByClassName('sub')[0].addEventListener('click', function(event) {
        let quantity_value = event.target.parentElement.getElementsByClassName('quantity_text')[0];
        console.log(quantity_value);
        let currentQuantity = parseInt(quantity_value.innerText.replace('Quantity: ', ''));
        let newQuantity = currentQuantity - 1;
        if(isNaN(newQuantity) || newQuantity <= 0) {
            newQuantity = 1
        }
        quantity_value.innerText = `Quantity: ${newQuantity}`;
        console.log(quantity_value.innerText);
        updateTotalPrice();        
    })

    createItem.getElementsByClassName('btn_remove')[0].addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateTotalPrice()
    })
}

function updateTotalPrice() {
    let cartItems = document.getElementsByClassName('cart_items')[0]
    let itemsList = cartItems.getElementsByClassName('items')
    let total = 0

    for (let i = 0; i < itemsList.length; i++) {
        let item = itemsList[i];
        let item_price = item.getElementsByClassName('ps5_price')[0].getElementsByClassName('price_text')[0]
        let item_quantity = item.getElementsByClassName('ps5_price')[0].getElementsByClassName('quantity_text')[0]
        let price = parseFloat(item_price.innerText.replace(/Price:|,/g, ""))
        let quantity = parseFloat(item_quantity.innerText.replace('Quantity: ', ''))
        total = total + (price * quantity)
    }
    document.getElementsByClassName('price')[0].innerText = 'Total price: ' + total
}

const shop = document.querySelector(".cart_img")
const shade = document.querySelector(".shade")
const kart = document.querySelector(".btn1")
const list = document.querySelector(".cart_list")

document.addEventListener("click", function (event) {
    if(event.target == shop || event.target == shade) {
        return list.classList.toggle("hide")
    }
})

kart.addEventListener("click", function (event) {
    list.classList.toggle("hide")
})