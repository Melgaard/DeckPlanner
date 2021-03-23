<template>
	<div class="deckView" ref="deckView">
		<ReturnButton @return="closeView" />
		<Decklist :deck="deck" :clickFunction="setFrontCardFunction(deck)"/>
	</div>
</template>

<script>
import Decklist from '../components/Decklist.vue';
import ReturnButton from '../components/ReturnButton.vue';
import DB from '../services/database.ts';
export default {
	name: 'Deck',
	props: {
		deck: Object,
	},
	components: {
		Decklist,
		ReturnButton
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
				const dts = DB.loadDB();
				dts.forEach((d, index) => {if (d.name == deck.name) dts[index]=deck;});
				DB.saveDB(dts);
			};
			return retFunc;
		}
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
