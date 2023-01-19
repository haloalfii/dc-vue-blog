import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Add from "../pages/add/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/add",
            name: "add",
            component: Add,
        },
    ],
});

export default router;
