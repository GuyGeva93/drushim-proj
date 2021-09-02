<template>
	<div class="product-preview">
		<img src="" />
		<h2>{{ product.name }}</h2>
		<h3>${{ product.price }}</h3>
		<span>{{ product.category.name }}</span>
		<section class="product-edit">
			<button>Edit</button>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
		},
	},

}
</script>

<style>
</style>