<template>
	<div class="decklist" ref="decklist">
		<div v-if="deck.name"> {{deck.name}} </div>
		<Cardlist v-if="deck.commander" :title="'Commander:'" :deck="[deck.commander]" :clickFunction="setFrontCard" />
		<Cardlist v-if="deck.companion" :title="'Companion:'" :deck="[deck.companion]" :clickFunction="setFrontCard" />
		<Cardlist :title="'Maindeck:'" :deck="deck.mainDeck" :clickFunction="setFrontCard" />
		<Cardlist v-if="deck.sideBoard" :title="'Sideboard:'" :deck="deck.sideBoard" :clickFunction="setFrontCard" />
	</div>
</template>

<script>
import Cardlist from './Cardlist.vue';
import cardFetcher from '../services/cardFetcher.ts';

export default {
	name: 'Decklist',
	props: {
		deck: {
			type: Object, //Type to Deck
			required: true
		},
		clickFunction: {
			type: Function,
			required: false
		}
	},
	components: {
		Cardlist,
	},
	methods: {
		async setFrontCard(params) {
			this.clickFunction(params)
			await this.setBackgroundImage()
		},
		async setBackgroundImage() {
			if (this.deck?.frontCard) {
				const backgroundImgUrl = await cardFetcher.getCardImageUrl(this.deck.frontCard);
				this.$refs.decklist.style.backgroundImage = `url(${backgroundImgUrl})`;
				this.$refs.decklist.style.backgroundSize = 'cover';
				this.$refs.decklist.style.backgroundRepeat = 'no-repeat';
				this.$refs.decklist.style.backgroundPosition = 'center center';
			}
		}
	},
	async created() {
		await this.setBackgroundImage()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.decklist {
	width: 350px;
	margin: auto;
}
</style>
