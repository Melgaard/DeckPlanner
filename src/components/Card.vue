<template>
	<div class="card" ref="card">
		{{card.quantity}} {{card.name}}
	</div>
</template>

<script lang="ts">
// import { Card } from '../types';
export default {
	name: 'CardComponent',
	props: {
		card: {
			type: Object, //TODO: as PropType<Card> or something similar that works
		}
	},
	components: {
	},
	data() {
		return {

		}
	},
	methods: {
		
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
