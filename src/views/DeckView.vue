<template>
	<div class="deckView" ref="deckView">
		<div @click="closeView"> Return </div>
		{{deck.name}}
		<div v-if="deck.companion">
			<div> Companion: </div>
			<Card :card="deck.companion" />
		</div>
		<div> Maindeck: </div>
		<div v-for="card in deck.mainDeck" v-bind:key="card.name">
			<Card :card="card" />
		</div>
		<div> Sideboard: </div>
		<div v-for="card in deck.sideBoard" v-bind:key="card.name">
			<Card :card="card" />
		</div>
	</div>
</template>

<script>
import Card from '../components/Card.vue';
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
		}
	},
	methods: {
		closeView() {
			this.$emit('closeView');
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
