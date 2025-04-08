import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import ReadPostView from '@/views/ReadPostView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/post',
        name: 'post',
        component: () => import('../views/CreatePostView.vue')
    },
    {
        path: '/readBoard',
        name: 'readboard',
        component: () => import('../views/ReadPostView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
