<template>
	<div class="deckImporter" ref="deckImporter" @click="importDeck">
		Create new from clipboard
	</div>
</template>

<script>
import deckFormatter from '../services/deckFormatter.ts';
import connection from '../services/connection.ts';

export default {
	name: 'DeckImporter',
	props: {
	},
	methods: {
		async createDeck() {
			const clipBoardText = await navigator.clipboard.readText();
			this.$emit('createDeck', clipBoardText);
		},
		async importDeck() {
			const clipBoardText = await navigator.clipboard.readText();
			//TODO: Fix name and frontcard
			const newDeck = deckFormatter.objectFromString(clipBoardText);
			newDeck.name = 'New Deck';
			newDeck.frontCard = newDeck?.mainDeck[Math.floor(Math.random() * newDeck.mainDeck.length)] || {name: ''} ;
			
			connection.createDeck(newDeck);
			this.$emit('deckImported', newDeck);
		}
	},
	async created() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deckImporter {
	display: inline-block;
	width: 375px;
	height: 275px;
	margin: 5px;
}
</style>
