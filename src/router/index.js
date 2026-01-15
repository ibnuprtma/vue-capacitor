import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useAuthStore } from '../stores/auth';
import TabsPage from '../views/TabsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/ProfileView.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    // Check auth status (restore from storage if needed)
    if (!authStore.isAuthenticated) {
        await authStore.checkAuth();
    }

    if (to.path !== '/login' && !authStore.isAuthenticated) {
        next('/login');
    } else if (to.path === '/login' && authStore.isAuthenticated) {
        next('/tabs/home');
    } else {
        next();
    }
});

export default router;
