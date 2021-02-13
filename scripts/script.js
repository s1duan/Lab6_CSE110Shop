// Script.js
var product_list_container = document.getElementById("product-list");
var localStorage = window.localStorage;
var cart = document.getElementById("cart-count")

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
    var currItem = localStorage.getItem(localStorage.key(i))
    if (currItem.includes("image") && currItem.includes("title") && currItem.includes("price")){
      var productInfo = JSON.parse(currItem)
      newCard = document.createElement("product-item")
      newCard.setAttribute("img", productInfo["image"])
      newCard.setAttribute("alt", productInfo['description'])
      newCard.setAttribute("title", productInfo["title"])
      newCard.setAttribute("price", productInfo["price"])
      newCard.setAttribute("id", productInfo["id"])
      product_list_container.appendChild(newCard)
    }
  }
  cart.innerHTML = localStorage.getItem("cart").split(" ").length - 1
});