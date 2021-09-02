import { keyBy } from 'lodash'
export const productService = {
  query,
  
}

const gProducts = _loadProducts()

function query(filterBy = '') {
  console.log(filterBy)
  const regex = new RegExp(filterBy, 'i')
  const products = gProducts.filter(product => regex.test(product.category.name))
  console.log('products', products)
  return products
}

function sortProducts() {

}


function _loadProducts() {
  const products = require('../data/products.json')
  const categories = require('../data/categories.json')
  const categoryById = keyBy(categories, 'id') //Generating object to define product's category
  const productsToShow = products.map(p => {
    return {
      ...p, category: categoryById[p.categoryId]
    }
  }) // Insert new property to each product with his category name
  console.log(productsToShow)
  return productsToShow
}