import App from './App'
import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'
// #ifdef H5
import lazyPlugin from 'vue3-lazy'
// #endif


export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
	// #ifdef H5
	app.use(lazyPlugin, {
		  loading: './static/images/common/placeholder.png'
	})
	// #endif
  return {
    app,
	Pinia
  }
}
