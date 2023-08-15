const cart = document.querySelector(".btn")
const kart = document.querySelector(".btn1")
const list = document.querySelector(".cart_list")
const item = document.querySelector(".items")
const add = document.querySelector(".btn_add")
const remove = document.querySelector(".btn_remove")
const price = document.querySelector(".price")
let sum = 0

cart.addEventListener("click", function (event) {
    return list.classList.toggle("hide")
})

kart.addEventListener("click", function (event) {
    list.classList.toggle("hide")
})

add.addEventListener("click", function (event) {
    const ps5 = document.createElement("li")
    ps5.textContent = "Sony Limited Edition Spider-Man 2 PS5 Console"
    item.appendChild(ps5)
    sum += 30000
    price.textContent = "Total price: ${sum}"
})