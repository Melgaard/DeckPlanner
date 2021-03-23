<template>
	<div class="deckView" ref="deckView">
		<ReturnButton @return="closeView" />
		<Decklist :deck="deck" />
	</div>
</template>

<script>
import Decklist from '../components/Decklist.vue';
import ReturnButton from '../components/ReturnButton.vue';
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
