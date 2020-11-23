import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl' // 引入综合样式（重置、基础、字体图标）

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
