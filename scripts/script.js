// Script.js
var product_list_container = document.getElementById("product-list");
var localStorage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
  // check if local storage already contains the data
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (var key in data) {
        localStorage.setItem(key, JSON.stringify(data[key]))
      }
    })
  for (var i = 0; i < localStorage.length; i++){
    productInfo = JSON.parse(localStorage.getItem(localStorage.key(i)))
    newCard = document.createElement("product-item")
    console.log(productInfo["title"])
    console.log(productInfo["image"])
    newCard.img = productInfo["image"]
    newCard.alt = productInfo['description']
    newCard.title = productInfo["title"]
    newCard.price = productInfo["price"]
    product_list_container.appendChild(newCard)
  }
});