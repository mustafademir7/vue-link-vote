import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateLink from '../components/CreateLink';
import LinkList from '../components/LinkList/LinkList';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'list',
        component: LinkList,
    },
    {
        path: '/add',
        name: 'add',
        component: CreateLink,
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;