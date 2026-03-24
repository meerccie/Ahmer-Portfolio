import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectsView,
    },
    // You can add a 'ProjectDetail' route later
  ],
})

export default router
