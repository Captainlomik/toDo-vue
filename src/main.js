import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import components from '@/components/UI/index'
import router from './router/router'
import 'vuetify/dist/vuetify.min.css'

loadFonts()
const app = createApp(App)
components.forEach(el => {
    app.component(el.name, el)
})

app.use(vuetify)
app.use(router)
app.mount('#app')

