import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDOMPurifyHTML from 'vue-dompurify-html'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faEyeSlash, faCircleNodes, faFile, faBaby, faSkull, faEdit, faClose, faTrash, faUser, faPlus, faFaceKiss, faHandshake, faSave } from '@fortawesome/free-solid-svg-icons'

import VNetworkGraph from 'v-network-graph'
import 'v-network-graph/lib/style.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VNetworkGraph)
app.use(VueDOMPurifyHTML)

library.add(faGithub, faMagnifyingGlass, faEyeSlash, faCircleNodes, faFile, faBaby, faSkull, faEdit, faClose, faTrash, faUser, faPlus, faFaceKiss, faHandshake, faSave)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
