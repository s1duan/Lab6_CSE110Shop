// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (var key in data) {
        console.log(data[key])
        window.localStorage.setItem(key, data[key])
      }
    })
});