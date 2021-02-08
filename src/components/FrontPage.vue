<template>
	<div class="frontpage">
		<span v-for="deck in decks" v-bind:key="deck.name">
			<Deck :name="deck.name" />
		</span>
	</div>
</template>

<script>
import Deck from './Deck.vue'
export default {
	name: 'FrontPage',
	components: {
		Deck
	},
	data() {
		return {
			decks: [{name: 'Rakdos'}, {name: 'Izzet'}],
		}
	},
	props: {
		name: String,
		image: String,
	},
	methods: {
		clicked() {
			console.log('clicked ' + name);
			this.$emit('clicked', name)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.frontpage {
	background-color: #424141;
	color: white;
}
</style>
