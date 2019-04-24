<template>
  <div id="app">
    <sticky />
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
import Sticky from './layout/Sticky.vue'
import Hero from './layout/Hero.vue'
import About from './layout/About.vue'
import Lecturers from './layout/Lecturers.vue'
import Schedule from './layout/Schedule.vue'
import Sponsors from './layout/Sponsors.vue'
import Access from './layout/Access.vue'
import Contact from './layout/Contact.vue'
import 'ress'
var WebFont = require("webfontloader");
import SweetScroll from "sweet-scroll"

export default {
  name: 'app',
  components: {
    Sticky,
    Hero,
    About,
    Lecturers,
    Schedule,
    Sponsors,
    Access,
    Contact
  },
  mounted() {
    let config = {
        typekit: {
            id: 'gvr6tqd'
        }
    };
    WebFont.load(config);
    const sweetScroll = new SweetScroll({
  			trigger: "a[href^='#']",
  			offset: false ? -280 : -116,
  			duration: 500
		});
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

