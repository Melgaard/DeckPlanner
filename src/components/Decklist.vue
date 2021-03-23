<template>
	<div class="decklist" ref="decklist">
		<div v-if="deck.name"> {{deck.name}} </div>
		<Cardlist v-if="deck.companion" :title="'Companion:'" :deck="[deck.companion]" :clickFunction="clickFunction" />
		<Cardlist :title="'Maindeck:'" :deck="deck.mainDeck" :clickFunction="clickFunction" />
		<Cardlist v-if="deck.sideBoard" :title="'Sideboard:'" :deck="deck.sideBoard" :clickFunction="clickFunction" />
	</div>
</template>

<script>
import Cardlist from './Cardlist.vue';
export default {
	name: 'Decklist',
	props: {
		deck: {
			type: Object, //Type to Deck
			required: true
		},
		clickFunction: {
			type: Function,
			required: false
		}
	},
	components: {
		Cardlist,
	},
	methods: {
		// clicked() {
		// 	console.log('clicked ' + name);
		// 	this.$emit('clicked', name)
		// }
	},
	async created() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.decklist {
	width: 350px;
	margin: auto;
}
</style>
