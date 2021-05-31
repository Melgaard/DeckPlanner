<template>
	<div class="ReturnButton" ref="ReturnButton" @click="$emit('return')">
		<span v-if="buttonText"> {{ buttonText }} </span>
	</div>
</template>

<script lang="ts">
export default {
	name: "ReturnButton",
	props: {
		buttonText: String,
	},
	emits: [
		'return'
	],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ReturnButton {
  background: url("../../assets/returnIcon.png") no-repeat;
  background-size: 120px;
  height: 100px;
  background-position: center;

  cursor: pointer;
}
</style>
