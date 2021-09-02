<template>
	<div class="products">
		<product-filter @filter="filter" />
		<product-list />
	</div>
</template>

<script>
import productList from '../cmps/product-list.vue'
import productFilter from '../cmps/product-filter.vue'
export default {

	methods: {
		async filter(filterBy) {
			this.$store.commit({ type: 'setFilter', filterBy })
			await this.$store.dispatch({ type: 'loadProducts' })
		}
	},

	components: {
		productList,
		productFilter
	},
}
</script>