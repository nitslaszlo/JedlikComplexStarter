import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Home2 from "@/views/Home2.vue";
import Store from "@/views/VuexDemo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home2",
    name: "home2",
    component: Home2
  },
  {
    path: "/store",
    name: "store",
    component: Store
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
