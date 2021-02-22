<template>
	<div class="deck" ref="deck">
		This is {{deck.name}}
	</div>
</template>

<script>
import cardFetcher from '../services/cardFetcher.ts';
export default {
	name: 'Deck',
	props: {
		deck: Object,
	},
	methods: {
		// clicked() {
		// 	console.log('clicked ' + name);
		// 	this.$emit('clicked', name)
		// }
	},
	async created() {
		const backgroundImgUrl = await cardFetcher.getCardImageUrl(this.deck.frontCard);
		this.$refs.deck.style.backgroundImage = `url(${backgroundImgUrl})`;
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
