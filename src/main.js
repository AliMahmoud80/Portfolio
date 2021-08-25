import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { gsap } from 'gsap'
import scrollToPlugin from 'gsap/ScrollToPlugin'
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(scrollTrigger)
gsap.registerPlugin(scrollToPlugin)
gsap.core.globals('ScrollTrigger', scrollTrigger)

createApp(App).mount('#app')
