import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login.vue';
import Index from '@/pages/Index.vue';
import Register from '@/pages/Register.vue';
import Detail from '@/pages/Detail.vue';
import Create from '@/pages/Create.vue';
import Edit from '@/pages/Edit.vue';
import User from '@/pages/User.vue';
import My from '@/pages/My.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/detail',
      component: Detail,
    },
    {
      path: '/create',
      component: Create,
    },
    {
      path: '/edit',
      component: Edit,
    },
    {
      path: '/user',
      component: User,
    },
    {
      path: '/my',
      component: My,
    },
  ],
});
