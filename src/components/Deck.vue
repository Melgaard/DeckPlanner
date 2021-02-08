<template>
	<div class="deck" >
		This is {{name}}
	</div>
</template>

<script>
export default {
  name: 'Deck',
  props: {
	name: String,
	image: String, //TODO
  },
  methods: {
	// clicked() {
	// 	console.log('clicked ' + name);
	// 	this.$emit('clicked', name)
	// }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deck {
	display: inline-block;
	width: 375px;
	height: 275px;
}
</style>
