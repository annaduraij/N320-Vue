/* Auth: Jay Annadurai            */
/* Proj: N320: Vue - Final        */
/* Date: 8 December 2023          */
/* Desc: Vue Router for a Vue SPA */

import {createRouter, createWebHistory} from 'vue-router';
import SessionsView from '../views/SessionsView.vue';
import UserSessions from '../views/UserSessions.vue';

const routes = [
    //Note, Base View & Sessions View Lead to the Same View
    {
        path: '/',
        name: 'base',
        component: SessionsView
    },
    {
        path: '/sessions',
        name: 'sessions',
        component: SessionsView
    },
    {
        path: '/usersessions',
        name: 'usersessions',
        component: UserSessions
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;