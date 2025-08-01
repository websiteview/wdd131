import products from './products.js';

const productSelect = document.getElementById('product');

document.addEventListener('DOMContentLoaded', () => {
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
