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
      <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.04 175.28"><defs></defs><title>icon-black</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="ロゴ"><path class="cls-1" d="M190.25,132.52l-18.9-18.89A87.36,87.36,0,0,0,175.16,83C172.94,39.8,138.75,4.2,95.63.36A87.73,87.73,0,0,0,.11,92.09c2.24,45,39.18,81.47,84.24,83.13a87.32,87.32,0,0,0,23.79-2.36,86.4,86.4,0,0,0,11.38-3.61h0c.76-.34,4.63-2.18,5.64-6.09a9.07,9.07,0,0,0,.15-3.35,10.82,10.82,0,0,0-2.79-5.89l-4.29-4.3-12.46-12.49a23.8,23.8,0,0,1-5.29-7.49,22.81,22.81,0,0,1-1.88-6.74,22.14,22.14,0,0,1,17.75-24.16,22,22,0,0,1,13.35,1.55,22.31,22.31,0,0,1,7.47,5.51l0,0,12.42,12.44,6.88,6.9,3.87,3.87,2.88,2.89c.71.71,7.33,7.29,14.16,14a9.08,9.08,0,0,0,2.24,1.65,9.26,9.26,0,0,0,11.87-2.86C194,141.14,193.3,135.57,190.25,132.52ZM84.86,110.79a5.17,5.17,0,0,1-5.12,4.48,5.63,5.63,0,0,1-.71,0l-14.33-2A5.18,5.18,0,0,1,66.1,103L80.43,105A5.19,5.19,0,0,1,84.86,110.79ZM95.32,92.86A5.2,5.2,0,0,1,88,92.51l-9.73-10.7a5.18,5.18,0,0,1,7.67-7l9.73,10.7A5.18,5.18,0,0,1,95.32,92.86Zm18.84-8.6H114a5.18,5.18,0,0,1-5.17-5l-.57-14.45a5.18,5.18,0,1,1,10.35-.4l.57,14.44A5.19,5.19,0,0,1,114.16,84.26Z"/></g></g></svg>
      <p>&copy; CEiQ 2019</p>
    </footer>
    <mobile-navigation />
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
import LightningTalk from './layout/LightningTalk'
import Contact from './layout/Contact.vue'
import MobileNavigation from './layout/MobileNavigation.vue'
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
    LightningTalk,
    Contact,
    MobileNavigation
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
  background-color: #6BD1D4;
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
  padding: 48px 16px;
  background: linear-gradient(122deg,#f5f0b1 0%, #f5bfc6 50%, #c5eeef 100%);
  text-align: center;
  position: relative;
  .footer-icon {
    width: 64px;
    margin: 16px 0 24px;
    color: #333;
  }
}
</style>

