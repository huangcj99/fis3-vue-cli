// import Vue from 'vue'
// import App from './components/app.vue'
const Vue = require('vue'),
      App = require('./components/app.vue');
/**
 * [index description]
 * @type {Object}
 *
 *  @require ../../components_modules/reset.css
 *  @require ./test.css
 */

console.log('初始化vue');

 new Vue({
   el: '#app',
   render: h => h(App)
 });
