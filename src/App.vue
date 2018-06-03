<template>
  <div id="app">
    <cs-header></cs-header>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import csHeader from './components/csHeader'
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
  body {
    background: #36465d;
    color: #fff!important;
  }
  /* Vue 多组件切换过渡动画 */
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }

</style>
