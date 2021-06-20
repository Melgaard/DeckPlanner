<template>
	<div class="deckView" ref="deckView">
		<ReturnButton @return="closeView" />
		<Button :buttonText="'Delete'" @click="deleteDeck(deck)" />
		<Decklist :deck="deck" :clickFunction="setFrontCardFunction(deck)"/>
	</div>
</template>

<script>
import Decklist from '../components/Decklist.vue';
import ReturnButton from '../components/baseFragments/ReturnButton.vue';
import Button from '../components/baseFragments/Button.vue';
import Connection from '../services/connection.ts';
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
			const retFunc = function(card) {
				deck.frontCard = card.name;

				//TODO: refactor save when update deck method is made in DB
				const dts = Connection.loadDB();
				dts.forEach((d, index) => {if (d.name == deck.name) dts[index]=deck;});
				Connection.saveDB(dts);
			};
			return retFunc;
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
