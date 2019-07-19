import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.prototype.$menuIsOpen = false;

//モバイル端末かどうか タブレット端末含む
Vue.prototype.isMobile = function () {
  var ua = navigator.userAgent;
  // iPad
  if(ua.indexOf('iPad') > -1) return true;
  // iPhone
  if(ua.indexOf('iPhone') > -1) return true;
  // Android
  if(ua.indexOf('Android') > -1) return true;
  // Other
  if(ua.indexOf('Mobile') > -1 && ua.indexOf('iPad') === -1) return true;
  return false;
};

new Vue({
  render: h => h(App),
}).$mount('#app')