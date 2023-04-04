import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
      meta: {
        title: 'Blogs'
      }
    },
  ]
});

export default router;
