<template>
	<div class="card" ref="card">
		{{card.quantity}} {{card.name}}
	</div>
</template>

<script lang="ts">
//TODO: find better way to avoid erros from eslint when importing types
// eslint-disable-next-line no-unused-vars s
import { Card } from '../types';
// import { PropType } from 'vue';
export default {
	name: 'CardComponent',
	props: {
		// card: Object as () => Card //PropType<Card>
		card:  {
			type: Object as () => Card, //TODO: as PropType<Card> or something similar that works
		}
	},
	components: {
	},
	data() {
		return {

		}
	},
	methods: {
		deleteme() {
			var x: Card ={name: ''};
			console.log(x);
		}
	},
	async created() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	text-align: left;
}
</style>
