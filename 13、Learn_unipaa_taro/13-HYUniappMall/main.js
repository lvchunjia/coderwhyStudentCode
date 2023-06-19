
import store from './store/index.js'

// #ifdef H5
import lazyPlugin from 'vue3-lazy'
// #endif

// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false

App.mpType = 'app'

// #ifdef H5
Vue.use(lazyPlugin, {
  loading: './static/images/common/placeholder.png'
})
// #endif

const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  // #ifdef H5
  app.use(lazyPlugin, {
    loading: './static/images/common/placeholder.png'
  })
  // #endif
  
  return {
    app
  }
}
// #endif