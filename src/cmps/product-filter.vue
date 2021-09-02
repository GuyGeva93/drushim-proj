<template>
	<div class="header">
		<el-input placeholder="Search" v-model="search" @input="searchProduct"></el-input>
		<button>Search</button>

		<el-select v-model="categoryValue" placeholder="Select" @input="filter">
			<el-option
				v-for="category in categories"
				:key="category.value"
				:label="category.label"
				:value="category.value"
			>
			</el-option>
		</el-select>

		<el-select v-model="sortByValue" placeholder="Select">
			<el-option
				v-for="option in sortBy"
				:key="option.value"
				:label="option.label"
				:value="option.value"
			>
			</el-option>
		</el-select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			categories: [
				{
					value: '',
					label: 'All'
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
			categoryValue: 'Category',
			sortBy: [
				{
					value: 'Name',
					label: 'Name'
				},
				{
					value: 'Price',
					label: 'Price'
				},
				{
					value: 'Rating',
					label: 'Rating'
				}
			],
			sortByValue: 'SortBy'
		}
	},
  methods: {
    searchProduct() {
      console.log(this.search)
    },
		filter(){
			this.$emit('filter', this.categoryValue)
		}
  },

}
</script>