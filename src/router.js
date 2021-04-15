import { createRouter, createWebHistory } from 'vue-router'
import ConverterPage from './ConverterPage/ConverterPage.vue'

const routes = [
  {
    path: '/',
    name: 'ConverterPage',
    component: ConverterPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
