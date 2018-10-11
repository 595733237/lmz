import Vue from 'vue'
import App from './App.vue'

import './styles/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/theme.css'

import router from './router'
import store from './store'

// XXX: 没必要同时用两套UI库
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

// XXX: 按需引入插件，尽量不要挂在prototype上
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
