<template>
	<div class="product-preview" v-if="product">
		<h2 class="product-preview-details">{{ product.name }}</h2>
		<img :src="require(`@/assets/img/${product.image}`)" />
		<section class="product-preview-details">
			<h3>${{ product.price }}</h3>
			<section class="product-preview-edit">
				<span>{{ product.category.name }}</span>
				<img @click="toggleModal" src="@/assets/img/edit.png" />
			</section>
			<product-edit v-if="modal" @closeModal="toggleModal"/>
		</section>
	</div>
</template>

<script>
import productEdit from './product-edit.vue'
export default {
	props: {
		product: {
			type: Object,
		},
	},
	data() {
		return {
			modal: false
		}
	},
	methods: {
		toggleModal() {
			this.modal = !this.modal
		}
	},
	components: {
		productEdit
	},
}
</script>
