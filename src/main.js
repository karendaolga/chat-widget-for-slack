// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// VALIDATION
if (!global._babelPolyfill) {
  require('babel-polyfill')
}

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios' // ajax calls module

Vue.use(VueAxios, axios)

var VueCookie = require('vue-cookie') // cookie helper module
Vue.use(VueCookie)

require('webpack-jquery-ui/draggable')
require('webpack-jquery-ui/resizable')
var SimpleVueValidation = require('simple-vue-validator')
Vue.use(SimpleVueValidation)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#slackChatWidget',
  components: { App },
  template: '<App/>'
})
