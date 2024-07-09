// import styles
import './assets/styles/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global components
import BaseContainer from "./components/global/BaseContainer.vue"
import BaseDivider from "./components/global/BaseDivider.vue"

// gsap template
// import { gsap } from "gsap";
    
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(Flip,ScrollTrigger,Draggable);

const app = createApp(App)

app.use(router)

// define global components
app
  .component("BaseContainer", BaseContainer)
  .component("BaseDivider", BaseDivider)


app.mount('#app')
