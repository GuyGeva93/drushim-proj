<template>
	<section class="product-edit-container">
		<form class="product-edit">
			<button @click.stop="closeModal">X</button>
			<h3>Product edit</h3>
			<input name="name" type="text" placeholder="Name" />
			<input name="price" type="text" placeholder="Price" />
			<span>Edit</span>
		</form>
	</section>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$emit('closeModal')
		}
	},
}
</script>

<style>
</style>