<template>
	<div class="deckImporter" ref="deckImporter" @click="importDeck">
		Create new from clipboard
	</div>
</template>

<script lang="ts">
import deckFormatter from '../services/deckFormatter';
import connection from '../services/connection';

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
			const newDeck = deckFormatter.decklistFromString(clipBoardText);

			if (!newDeck.mainDeck) {
				//TODO: implement better user error than alert
				alert("Your clipboard seems to contain an invalid decklist");
				return;
			}

			newDeck.name = 'New Deck';
			newDeck.frontCard = newDeck?.mainDeck[Math.floor(Math.random() * newDeck.mainDeck.length)] || {name: ''} ;
			
			const createdDeck = connection.createDeck(newDeck);
			this.$emit('deckCreated', createdDeck);
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
