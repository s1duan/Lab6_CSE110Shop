// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      for (var key in data) {
        window.localStorage.setItem(key, data[key])
      }
    })
});