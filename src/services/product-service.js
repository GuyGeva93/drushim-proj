import { keyBy } from 'lodash'
export const productService = {
  query,

}

const gProducts = _loadProducts()

function query(filterBy = { txt: '', category: '', sortBy: '' }) {
  const regex = new RegExp(filterBy.txt, 'i') //Ignore uppercase
  let products = gProducts.filter(p => regex.test(p.name))
  if (filterBy.category) {
    products = products.filter(p => p.category.name === filterBy.category)
  }
  if (filterBy.sortBy) {
    if (filterBy.sortBy === 'Price') {
      products = products.sort((a, b) => a.price - b.price)
    }
    else if (filterBy.sortBy === 'Name') {
      products = products.sort((a, b) => a.name.localeCompare(b.name))
    }
  }
  // products = gProducts.filter(product => regex.test(product.category.name))
  // products = gProducts.filter(product => regex.test(product.category.name))
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
  return productsToShow
}