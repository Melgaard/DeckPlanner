<template>
	<div class="deck" ref="deck" @click="createDeck">
		Create new from clipboard
	</div>
</template>

<script>
export default {
	name: 'DeckCreate',
	props: {
	},
	methods: {
		async createDeck() {
			const clipBoardText = await navigator.clipboard.readText();
			console.log('createDeck', clipBoardText);
			this.$emit('createDeck', clipBoardText);
		}
	},
	async created() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deck {
	display: inline-block;
	width: 375px;
	height: 275px;
	margin: 5px;
}
</style>
