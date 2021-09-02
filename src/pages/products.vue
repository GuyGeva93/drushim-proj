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
		filter(filterBy) {
			this.$store.commit({ type: 'setFilter', filterBy })
			this.$store.dispatch({ type: 'loadProducts' })
		}
	},

	components: {
		productList,
		productFilter
	},
}
</script>