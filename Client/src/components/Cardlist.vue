<template>
	<div class="cardlist" ref="cardlist">
		<div v-if="title"> {{title}} </div>
		<div v-for="card in deck" v-bind:key="card.name">
			<Card :card="card" @click="clickFunction ? clickFunction(card) : null" />
		</div>
	</div>
</template>

<script>
import Card from './Card.vue';
export default {
	name: 'Cardlist',
	props: {
		title: {
			type: string,
			required: false
		},
		deck: {
			type: Array, //Type to Array<Card>
			required: true
		},
		clickFunction: {
			type: Function,
			required: false
		}
	},
	components: {
		Card,
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
.cardlist {
	width: 350px;
	margin: auto;
}
</style>
