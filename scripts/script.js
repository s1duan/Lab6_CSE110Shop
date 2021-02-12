// Script.js

window.addEventListener('DOMContentLoaded', () => {
  const response = fetch('https://fakestoreapi.com/products')
  console.log(response.json())
});