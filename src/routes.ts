import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '', component: Home, meta: { title: 'Home' }},
  { path: '/settings', component: Settings, meta: { title: 'Settings' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
