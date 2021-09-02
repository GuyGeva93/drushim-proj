import Vue from 'vue'
import Vuex from 'vuex'
import { productService } from '../services/product-service'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    categories: [],
    filterBy: {
      txt: '',
      category: '',
      sortBy: ''
    }
  },
  getters: {
    products({ products }) { return products }
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    }
  },
  actions: {
    loadProducts({ commit, state }) {
      try {
        const products = productService.query(state.filterBy)
        commit({ type: 'setProducts', products })
      } catch (err) {
        console.log('Cannot load products =>', err)
      }
    },
  },

})
