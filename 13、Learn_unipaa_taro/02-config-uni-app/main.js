import App from './App'
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App) // createApp()  
  return {
    app
  }
}