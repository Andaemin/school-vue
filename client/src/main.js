import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

loadFonts()

const app = createApp(App)
  .use(router)
  .use(store)
  .use(axios)
  .use(vuetify)

app.mount('#app')
