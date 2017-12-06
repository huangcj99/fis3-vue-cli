import Vue from 'vue'
import Promise from 'promise'
import App from './components/app.vue'

/**
 * [index description]
 * @type {Object}
 *
 *  @require ../../assets/css/reset.css
 *  @require ./test0.css
 */

console.log('实例化vue');

Vue.prototype.Promise = Promise;

new Vue({
  el: '#app',
  render: h => h(App)
});
