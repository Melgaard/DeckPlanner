<template>
	<div class="deckImporter" ref="deckImporter" @click="importDeck">
		<span class="createText">Create new from clipboard</span>
	</div>
</template>

<script lang="ts">
import deckFormatter from '../services/deckFormatter';
import connection from '../services/connection';
import { defineComponent } from 'vue'

//TODO: Make deckimporter work instantly without needing a page reload

export default defineComponent({
	name: 'DeckImporter',
	
	setup(props, { emit }) {
		return {
			async createDeck() {
				const clipBoardText = await navigator.clipboard.readText();
				emit('createDeck', clipBoardText);
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

				const createdDeck = await connection.createDeck(newDeck);
				emit('deckCreated', createdDeck);
			}
		}

	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deckImporter {
	display: inline-block;
	width: 375px;
	height: 275px;
	margin: 5px;
	vertical-align: bottom;

	align-content: center;

	border: #e88e16 1px;
	border-style: solid;
}
</style>
