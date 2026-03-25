import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import IndexView from '@/views/IndexView.vue'
import ConnectView from '@/views/ConnectView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/connect',
      name: 'connect',
      component: ConnectView,
    },
  ],
})

export default router
