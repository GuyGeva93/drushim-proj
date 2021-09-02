<template>
	<div class="products">
		<product-filter />
		<product-list />
	</div>
</template>

<script>
import productList from '../cmps/product-list.vue'
import productFilter from '../cmps/product-filter.vue'
export default {
	async created() {
		await this.$store.dispatch({ type: 'loadProducts' })
	},
	components: {
		productList,
		productFilter
	},
}
</script>