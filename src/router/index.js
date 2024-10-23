import { createRouter as createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";

// Import components
import AboutMe from "../components/AboutMe.vue";
import TechnicalProjects from "../components/TechnicalProjects.vue";
import Toolkit from "../components/Toolkit.vue";
import Contact from "../components/Contact.vue";

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const routes = [
  {
    path: "/",
    name: "about",
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "projects",
    component: TechnicalProjects,
  },
  {
    path: "/toolkit",
    name: "toolkit",
    component: Toolkit,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  // Get the Vuex store
  const store = useStore();

  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
});

export default router;
