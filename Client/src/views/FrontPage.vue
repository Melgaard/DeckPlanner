<template>
	<div class="frontpage">
		<span v-if="view == 'FrontPage'">
			<!-- <img alt="Bolas" :src="headerImg"> -->
			<div>
				<span v-for="deck in decks" v-bind:key="deck.id">
					<Deck :deck="deck" @click="selectDeck(deck)"/>
				</span>
				/** //TODO: Align DeckImporter with deck squares */
				<DeckImporter @deckCreated="deckCreated"/>
			</div>
		</span>
		<DeckView v-else-if="view == 'DeckView'" :deck="activeDeck" @closeView="resetView"/>
	</div>
</template>

<script>
//TODO: Change all components to Vue Composition instead of old options syntax
//TODO: Install Tailwind
import Deck from '../components/Deck.vue';
import DeckImporter from '../components/DeckImporter.vue';
import cardFetcher from '../services/cardFetcher.ts';
import Connection from '../services/connection.ts';
import DeckView from '../views/DeckView.vue';

// eslint-disable-next-line no-unused-vars
import { Decklist, Card } from '../types';

export default {
	name: 'FrontPage',
	components: {
		Deck,
		DeckImporter,
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
		async loadDB() {
			this.decks = (await Connection.loadDB()).decklistsByUser;
			console.log('loaded DB', this.decks);
		},
		saveDB() {
			Connection.saveDB(this.decks);
		},

		//Deck functions
		selectDeck(deck) {
			this.activeDeck = deck;
			this.view = 'DeckView';
		},
		deckCreated(createdDeck) {
			this.decks = this.decks.concat(createdDeck);
		}
	},
	async created() {
		Connection.initDB();
		this.loadDB();
		//69656 is best Nicol Bolas
		this.headerImg = await cardFetcher.getCardImageUrl({name: 'Nicol Bolas, Dragon god'});
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
