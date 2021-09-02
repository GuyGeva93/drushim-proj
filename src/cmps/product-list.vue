<template>
	<div class="product-list" v-if="products">
		<div v-for="product in products" :key="product.id">
			<product-preview :product="product" />
		</div>
	</div>
</template>

<script>
import productPreview from './product-preview.vue';
export default {
	created() {
		this.$store.dispatch({ type: 'loadProducts' })
	},

	computed: {
		products() {
			return this.$store.getters.products
		}
	},

	components: {
		productPreview,
	},
}
</script>

<style>
</style>