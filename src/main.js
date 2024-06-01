// import styles
import './assets/styles/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global components
import BaseContainer from "./components/global/BaseContainer.vue"

const app = createApp(App)

app.use(router)

// define global components
app
  .component("BaseContainer", BaseContainer)


app.mount('#app')
