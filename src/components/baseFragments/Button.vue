<template>
	<div class="Button" ref="nButton" @click="Clicked">
		<span v-if="buttonText"> {{buttonText}} </span>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Button',
	props: {
		buttonText: String
	},
	methods: {
		Clicked() {
			this.$emit('clicked');
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Button {
	height: 50px;
	width: 150px;
	text-align: center;
    padding: 15px;
    border: #6f6e6e 1px solid;

	margin: auto;

	cursor: pointer;
}
</style>
