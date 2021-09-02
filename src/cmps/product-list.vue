<template>
	<div class="product-list">
		{{products}}
		<product-preview />
	</div>
</template>

<script>
import productPreview from './product-preview.vue';
export default {
	created() {
		this.products = this.$store.getters.products
	},
	data() {
		return {
			products: null
		}
	},

	components: {
		productPreview,
	},
}
</script>

<style>
</style>