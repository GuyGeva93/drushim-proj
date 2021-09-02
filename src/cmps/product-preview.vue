<template>
	<div class="product-preview" v-if="product">
		<img :src="require(`@/assets/img/${product.image}`)" />
		<section class="product-preview-details">
			<h2>{{ product.name }}</h2>
			<h3>${{ product.price }}</h3>
			<section class="product-preview-edit">
				<span>{{ product.category.name }}</span>
				<button>Edit</button>
			</section>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
		},
	}
}
</script>
