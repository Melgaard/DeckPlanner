<template>
	<div class="deckView" ref="deckView">
		<ReturnButton @return="closeView" />
		<Button :buttonText="'Rename'" @click="renameDeck(deck)" style="display: inline-block"/>
		<Button :buttonText="'Delete'" @click="deleteDeck(deck)" style="display: inline-block"/>
		<Decklist :deck="deck" :clickFunction="setFrontCardFunction(deck)"/>
	</div>
</template>

<script>
import Decklist from '../components/Decklist.vue';
import ReturnButton from '../components/baseFragments/ReturnButton.vue';
import Button from '../components/baseFragments/Button.vue';
import Connection from '../services/connection.ts';

//TODO: Fix delete deck function

export default {
	name: 'Deck',
	props: {
		deck: Object,
	},
	components: {
		Decklist,
		ReturnButton,
		Button
	},
	data() {
		return {
		}
	},
	methods: {
		closeView() {
			this.$emit('closeView');
		},
		setFrontCardFunction(deck) {
			const retFunc = async function(card) {
				deck.frontCard = card;
				Connection.updateDeck(deck);
			};
			return retFunc;
		},
		renameDeck(deck) {
			const deckName = prompt('Enter the new name', '')

			//TODO: refactor save when update deck method is made in DB
			deck.name = deckName;
			// Connection.updateDeck(deck);
		},
		deleteDeck(deck) {
			Connection.deleteDeck(deck);
		},
	},
	async created() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deckView {
	width: 350px;
	margin: auto;
}
</style>
