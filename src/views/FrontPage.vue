<template>
	<div class="frontpage">
		<span v-if="view == 'FrontPage'">
			<img alt="Bolas" :src="headerImg">
			<div>
				<span v-for="deck in decks" v-bind:key="deck.name">
					<Deck :deck="deck" @click="selectDeck(deck)"/>
				</span>
			</div>
		</span>
		<DeckView v-else-if="view == 'DeckView'" :deck="activeDeck" @closeView="resetView"/>
	</div>
</template>

<script>
import Deck from '../components/Deck.vue';
import cardFetcher from '../services/cardFetcher.ts';
import DB from '../services/database.ts';
import DeckView from '../views/DeckView.vue';
export default {
	name: 'FrontPage',
	components: {
		Deck,
		DeckView
	},
	data() {
		return {
			decks: null,
			headerImg: null,
			view: 'FrontPage',
			activeDeck: null,
		}
	},
	props: {
		name: String,
		image: String,
	},
	methods: {
		//View functions
		resetView() {
			this.view = 'FrontPage';
			this.activeDeck = null;
		},
		
		//Database functions
		loadDB() {
			this.decks = DB.loadDB();
		},
		saveDB() {
			DB.saveDB(this.decks);
		},

		//Deck functions
		selectDeck(deck) {
			this.activeDeck = deck;
			this.view = 'DeckView';
		}
	},
	async created() {
		DB.initDB();
		this.loadDB();
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
