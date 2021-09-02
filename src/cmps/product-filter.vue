<template>
	<div class="header">
		<el-input placeholder="Search" v-model="filterBy.txt" @input="filter"></el-input>
		<button>Search</button>

		<el-select v-model="filterBy.category" placeholder="Select" @input="filter">
			<el-option
				v-for="category in categories"
				:key="category.value"
				:label="category.label"
				:value="category.value"
			>
			</el-option>
		</el-select>

		<el-select v-model="filterBy.sortBy" placeholder="Sort By">
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
	created() {
		console.log('this.filterBy', this.filterBy)
	},
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
		}
	},
	methods: {
		filter() {
			this.$emit('filter', JSON.parse(JSON.stringify(this.filterBy)))
		}
	},

}
</script>