<template>
	<div class="product-preview" v-if="product">
			<h2 class="product-preview-details">{{ product.name }}</h2>
		<img :src="require(`@/assets/img/${product.image}`)" />
		<section class="product-preview-details">
			<h3>${{ product.price }}</h3>
			<section class="product-preview-edit">
				<span>{{ product.category.name }}</span>
				<img src="@/assets/img/edit.png">
				<!-- <button>Edit</button> -->
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
