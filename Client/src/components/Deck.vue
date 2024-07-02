<template>
	<div class="deck" ref="deck">
		<div class=""> {{deck.name}} </div>
		<i v-if="isWhite" class="ms ms-w ms-cost ms-shadow"></i>
		<i v-if="isBlue" class="ms ms-u ms-cost ms-shadow"></i>
		<i v-if="isBlack" class="ms ms-b ms-cost ms-shadow"></i>
		<i v-if="isRed" class="ms ms-r ms-cost ms-shadow"></i>
		<i v-if="isGreen" class="ms ms-g ms-cost ms-shadow"></i>
	</div>
</template>

<script>
import cardFetcher from '../services/cardFetcher.ts';
import deckColors from '../services/deckColors.ts';
export default {
	name: 'Deck',
	props: {
		deck: Object, //as Decklist
	},
	data() {
		return {
			deck_colors: [] //as Array<Colors>
		}
	},
	methods: {
		
	},
	computed: {
		//TODO: Simplify these 5 methods
		isWhite() { return this.deck_colors.includes('White') },
		isBlue() { return this.deck_colors.includes('Blue') },
		isBlack() { return this.deck_colors.includes('Black') },
		isRed() { return this.deck_colors.includes('Red') },
		isGreen() { return this.deck_colors.includes('Green') }
	},
	async mounted() {
		if (this.deck?.frontCard) {
			//TODO: Turn this into helper function, as its reused elsewhere
			const backgroundImgUrl = await cardFetcher.getCardImageUrl(this.deck.frontCard);
			this.$refs.deck.style.backgroundImage = `url(${backgroundImgUrl})`;
			this.$refs.deck.style.backgroundSize = 'cover';
			this.$refs.deck.style.backgroundRepeat = 'no-repeat';
			this.$refs.deck.style.backgroundPosition = 'center center';
		}

		this.deck_colors = await deckColors.getColorsFromDeck(this.deck);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../node_modules/mana-font/css/mana.css';

.deck {
	display: inline-block;
	width: 375px;
	height: 275px;
	margin: 5px;
}
</style>
