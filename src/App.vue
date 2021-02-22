<template>
	<FrontPage />
</template>

<script>
import FrontPage from './views/FrontPage.vue'

export default {
  name: 'App',
  components: {
    FrontPage
  }
}
</script>

<style>
body {
	background-color: #424141;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background-color: #424141;
}
</style>
