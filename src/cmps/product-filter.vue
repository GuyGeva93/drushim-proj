<template>
	<div class="product-filter">
		<el-input
			class="product-filter-search"
			placeholder="Search"
			v-model="filterBy.txt"
			@input="filter"
		></el-input>
		<section class="product-filter-drop-down">
			<el-select v-model="filterBy.category" @input="filter">
				<el-option
					class="product-filter-category"
					v-for="category in categories"
					:key="category.value"
					:label="category.label"
					:value="category.value"
				>
				</el-option>
			</el-select>

			<el-select v-model="filterBy.sortBy" @input="filter">
				<el-option
					class="product-filter-sortby"
					v-for="option in sortBy"
					:key="option.value"
					:label="option.label"
					:value="option.value"
				>
				</el-option>
			</el-select>
		</section>
	</div>
</template>

<script>
export default {

	data() {
		return {
			filterBy: {
				txt: '',
				category: '',
				sortBy: ''
			},

			categories: [
				{
					value: '',
					label: 'Categories'
				},
				{
					value: 'Headphones',
					label: 'Headphones'
				},
				{
					value: 'Keyboards',
					label: 'Keyboards'
				},
				{
					value: 'Drones',
					label: 'Drones'
				},
			],
			sortBy: [
				{
					value: '',
					label: 'Sort By'
				},
				{
					value: 'Name',
					label: 'Name'
				},
				{
					value: 'Price',
					label: 'Price'
				},
			],
		}
	},
	methods: {
		filter() {
			this.$emit('filter', JSON.parse(JSON.stringify(this.filterBy)))
		}
	},

}
</script>