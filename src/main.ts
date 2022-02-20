import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { debounce } from 'ts-debounce'
import App from './App.vue'
import { routes } from './routes'
import './index.css'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: boolean;
  }
}

const pinia = createPinia()
pinia.use(({ options, store }) => {
  if (!options.persist) return

  const fromStorage = localStorage.getItem(store.$id)
  if (fromStorage) store.$patch(JSON.parse(fromStorage))

  store.$subscribe((mutation, state) => {
    console.log(mutation)
    debounce(localStorage.setItem(store.$id, JSON.stringify(state)))
  })
})

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia)
app.mount('#app')
