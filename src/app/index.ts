import "./index.pcss"
import { createApp } from "vue"
import { router, pinia } from "./providers"
import { VueQueryPlugin } from "vue-query"
import App from "./app.vue"

export const app = createApp(App).use(pinia).use(router).use(VueQueryPlugin)
