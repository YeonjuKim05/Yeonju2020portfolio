import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/WorkView",
    name: "work",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "WorkView" */ "../views/WorkView.vue"),
  },
  {
    path: "/portfolio/FanshaweMap",
    name: "FanshaweMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/FanshaweMap.vue"
      ),
  },
  {
    path: "/portfolio/ApopoCam",
    name: "ApopoCam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/ApopoCam.vue"
      ),
  },
  {
    path: "/portfolio/CutexBottle",
    name: "CutexBottle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/CutexBottle.vue"
      ),
  },
  {
    path: "/portfolio/SportVis",
    name: "SportVis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/SportVis.vue"
      ),
  },
  {
    path: "/portfolio/MendelBalm",
    name: "MendelBalm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/MendelBalm.vue"
      ),
  },
  {
    path: "/portfolio/ChatApp",
    name: "ChatApp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/ChatApp.vue"
      ),
  },
  {
    path: "/portfolio/HelveticaView",
    name: "HelveticaView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/HelveticaView.vue"
      ),
  },
  {
    path: "/portfolio/MusicMixer",
    name: "MusicMixer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/MusicMixer.vue"
      ),
  },
  {
    path: "/portfolio/BudweiserBeer",
    name: "BudweiserBeer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "WorkView" */ "../views/portfolio/BudweiserBeer.vue"
      ),
  },
  {
    path: "/ContactView",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "WorkView" */ "../views/ContactView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
