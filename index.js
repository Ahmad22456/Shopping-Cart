const cart = document.querySelector(".btn")
const shop = document.querySelector(".cart_img")
const shade = document.querySelector(".shade")
const kart = document.querySelector(".btn1")
const list = document.querySelector(".cart_list")
const item = document.querySelector(".items")
const add = document.getElementsByClassName("btn_add")
const remove = document.querySelector(".btn_remove")
let price = document.querySelector(".price")
let quantity = [0, 0]
let counter = []
let sum = 0

document.addEventListener("click", function (event) {
    // console.log(event.target)
    if(event.target == shop || event.target == shade) {
        return list.classList.toggle("hide")
    }
})

kart.addEventListener("click", function (event) {
    list.classList.toggle("hide")
})


for (let i = 0; i < add.length; i++) {

    let addButton = add[i];
    let title = addButton.parentElement.parentElement.parentElement.getElementsByClassName("ps5_text")[0].innerHTML
    let price = addButton.parentElement.parentElement.getElementsByClassName('price_text')[0].getElementsByClassName('price')[0].innerHTML

    addButton.addEventListener('click', function(event){
        addToCart(title, price)
    })

}

function addToCart(title, price) {

    let newItem = document.createElement('div')
    newItem.classList.add('ps5')
    let divbody = `
                    <p class="ps5_text">${title}</p>
                    <div class="ps5_price">
                        <p class="price_text">Price:${price}</p> 
                        <strong> Quantity = 0 </strong>
                        <button class="btn_remove">Remove Item</button>
                    </div>`
    newItem.innerHTML = divbody
    item.appendChild(newItem)
}
























// for (let i = 0; i < add.length; i++) {

//     counter[i] = 0
//     let addButton = add[i];
//     let description = addButton.parentElement.parentElement.parentElement.getElementsByClassName("ps5_text")[0].innerHTML
    
//     addButton.addEventListener("click", function (event) {

//         if(counter[i] != 0) {
//             return

//         } else {

//             let ps5 = document.createElement("div")
//             ps5.classList.add(i)
//             ps5.textContent = description + `                     Quantity ${quantity[i]}`
//             item.appendChild(ps5)
//         }

//         counter[i]++
//     })
// }
// for (let i = 0; i < add.length; i++) {

//     let addButton = add[i];

//     let description = addButton.parentElement.parentElement.parentElement.getElementsByClassName("ps5_text")[0].innerHTML

//     addButton.addEventListener("click", function (event) {
        
//         if(description == "Sony Limited Edition Spider-Man 2 PS5 Console") {
//             quantity[0] += 1
//             sum += 30000
//         } else if (description == "Microsoft Xbox Series X Console"){
//             quantity[1]++
//             sum += 25000
//         }
//         price.textContent = `Total price: ${sum}`
//         ps5.textContent = description + `                     Quantity ${quantity[i]}`
//     })
// }