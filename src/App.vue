<template>
  <div id="app">
    <hero />
  </div>
</template>

<script>
import Hero from './layout/Hero.vue'
import 'ress'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Sans CJK JP', 'Noto Sans JP', "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
svg {
  fill: currentColor;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
