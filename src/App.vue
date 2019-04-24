<template>
  <div id="app">
    <hero />
    <about />
    <lecturers />
    <schedule />
    <sponsors />
    <access />
    <contact />
    <footer>
      <p>&copy; CEiQ 2019</p>
    </footer>
  </div>
</template>

<script>
import Hero from './layout/Hero.vue'
import About from './layout/About.vue'
import Lecturers from './layout/Lecturers.vue'
import Schedule from './layout/Schedule.vue'
import Sponsors from './layout/Sponsors.vue'
import Access from './layout/Access.vue'
import Contact from './layout/Contact.vue'
import 'ress'

export default {
  name: 'app',
  components: {
    Hero,
    About,
    Lecturers,
    Schedule,
    Sponsors,
    Access,
    Contact
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

<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>

