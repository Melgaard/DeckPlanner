<template>
	<div class="deckView" ref="deckView">
		<div @click="closeView"> Return </div>
		{{deck.name}}
		<div> Maindeck: </div>
		<div v-for="card in deckObject.mainDeck" v-bind:key="card.name">
			<Card :card="card" />
		</div>
		<div> Sideboard: </div>
		<div v-for="card in deckObject.sideBoard" v-bind:key="card.name">
			<Card :card="card" />
		</div>
	</div>
</template>

<script>
import Card from '../components/Card.vue';
import deckFormatter from '../services/deckFormatter.ts';
export default {
	name: 'Deck',
	props: {
		deck: Object,
	},
	components: {
		Card,
	},
	data() {
		return {
			deckObject: null,
		}
	},
	methods: {
		closeView() {
			this.$emit('closeView');
		}
	},
	async created() {
		this.deckObject = deckFormatter.objectFromString(this.deck.decklist);
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
