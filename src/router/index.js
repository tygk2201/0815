import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/login',
        name: 'login',
        component: () => 
        import('../views/login.vue')
    }, {
        path: '/',
        component: () => import('../views/login.vue')
    }, {
        path: '/home',
        component: () => import('../views/home.vue'),
        children:[
            {
                path: '/home/homeFirst',
                component: () => import('../views/homeFirst.vue'),
                children: [{
                    path: '/home/homeFirst/first',
                    component: () => import('../views/homeFirst/first.vue'),
                },
                {
                    path: '/home/homeFirst/second',
                    component: () => import('../views/homeFirst/second.vue'),
                }]
            }, {
                path: '/home/homeSecond',
                component: () => import('../views/homeSecond.vue'),
                children: [{
                    path: '/home/homeSecond/first',
                    component: () => import('../views/homeSecond/meeting.vue'),
                },{
                    path: '/home/homeSecond/second',
                    component: () => import('../views/homeSecond/second.vue'),
                }]
            },

        ]
    }]
})