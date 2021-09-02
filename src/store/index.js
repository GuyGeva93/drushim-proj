import Vue from 'vue'
import Vuex from 'vuex'
import { productService } from '../services/product-service'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    categories: [],
    filterBy: ''
  },
  getters: {
    products({ products }) { return products }
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    }
  },
  actions: {
    async loadProducts({ commit, state }) {
      try {
        const products = await productService.query(state.filterBy)
        commit({ type: 'setProducts', products })
      } catch (err) {
        console.log('Cannot load products =>', err)
      }
    },
    async loadCategories({ commit }) {
      try {
        const categories = await productService.getCategories()
        commit({ type: 'setCategories' })
      } catch (err) {
        console.log('Cannot load categories =>', err)
      }

    }
  },

})
