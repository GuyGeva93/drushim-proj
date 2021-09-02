export const productService = {
  query,
  getCategories
}

const gProducts = require('../data/products.json')
const gCategories = require('../data/categories.json')

function query(filterBy) {
  const regex = new RegExp(filterBy.txt, 'i');
  const products = gProducts.filter(product => regex.test(product.name))
  return products
}

function sortProducts(){
  
}

function getCategories(){
  return gCategories
}