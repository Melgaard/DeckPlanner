<template>
	<div class="frontpage">
		<img alt="Bolas" :src="headerImg">
		<div>
			<span v-for="deck in decks" v-bind:key="deck.name">
				<Deck :deck="deck" />
			</span>
		</div>
	</div>
</template>

<script>
import Deck from '../components/Deck.vue';
import cardFetcher from '../services/cardFetcher.ts';
export default {
	name: 'FrontPage',
	components: {
		Deck
	},
	data() {
		return {
			decks: [{name: 'Rakdos', frontCard: "Immersturm Predator"}, {name: 'Izzet', frontCard: "Goldspan Dragon"}],
			headerImg: null,
		}
	},
	props: {
		name: String,
		image: String,
	},
	methods: {
		clicked() {
			console.log('clicked ' + name);
			this.$emit('clicked', name)
		}
	},
	async created() {
		//69656 is best Nicol Bolas
		this.headerImg = await cardFetcher.getCardImageUrl(69656);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.frontpage {
	background-color: #424141;
	color: white;
	text-align: center;
}
</style>
