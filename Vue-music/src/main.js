import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill' // 用于实现浏览器并不支持的原生API的代码。
import fastclick from 'fastclick'
import 'common/stylus/index.styl' // 引入综合样式（重置、基础、字体图标）

Vue.config.productionTip = false

fastclick.attach(document.body)// 整个PC所有body下的dom点击都不会有300毫秒的延时

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
