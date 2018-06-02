<template>
  <div id="app">
    <cs-header></cs-header>
    <router-view/>
  </div>
</template>

<script>
import csHeader from './components/csHeader.vue'
export default {
  name: 'App',
  components: {
    csHeader
  }
}
</script>

<style>
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
