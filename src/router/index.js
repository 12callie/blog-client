import Vue from "vue";
import Router from "vue-router";
// import Login from "@/pages/Login.vue";
// import Index from "@/pages/Index.vue";
// import Register from "@/pages/Register.vue";
// import Detail from "@/pages/Detail.vue";
// import Create from "@/pages/Create.vue";
// import Edit from "@/pages/Edit.vue";
// import User from "@/pages/User.vue";
// import My from "@/pages/My.vue";
import store from "@/store/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Index.vue")
    },
    {
      path: "/login",
      component: () => import("@/pages/Login.vue")
    },
    {
      path: "/register",
      component: () => import("@/pages/Register.vue")
    },
    {
      path: "/detail/:blogId",
      component: () => import("@/pages/Detail.vue")
    },
    {
      path: "/create",
      component: () => import("@/pages/Create.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/edit/:blogId",
      component: () => import("@/pages/Edit.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/user/:userId",
      component: () => import("@/pages/User.vue")
    },
    {
      path: "/my",
      component: () => import("@/pages/My.vue"),
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store
      .dispatch("checkLogin")
      .then(() => {
        if (!store.getters.isLogin) {
          next({
            path: "/login",
            query: { redirect: to.fullPath }
          });
        } else {
          next();
        }
      })
      .catch(() => {
        if (!store.getters.isLogin) {
          next({
            path: "/login",
            query: { redirect: to.fullPath }
          });
        } else {
          next();
        }
      });
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
