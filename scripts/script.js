// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // check if local storage already contains the data
  if (window.localStorage.length == 0){
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        for (var key in data) {
          console.log(data[key])
          window.localStorage.setItem(key, JSON.stringify(data[key]))
        }
      })
  }
});