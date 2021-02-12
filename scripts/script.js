// Script.js
var product_list_container = document.getElementById("product-list");
var localStorage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
  // check if local storage already contains the data
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      for (var key in data) {
        localStorage.setItem(key, JSON.stringify(data[key]))
      }
    })
  for (var i = 0; i < localStorage.length; i++){
    productInfo = JSON.parse(localStorage.getItem(localStorage.key(i)))
    newCard = document.createElement("product-item")
    console.log(productInfo["title"])
    console.log(productInfo["image"])
    newCard.setAttribute("img", productInfo["image"])
    newCard.setAttribute("alt", productInfo['description'])
    newCard.setAttribute("title", productInfo["title"])
    newCard.setAttribute("price", productInfo["price"])
    product_list_container.appendChild(newCard)
  }
});