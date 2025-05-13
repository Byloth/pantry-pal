import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/pages/HomePage.vue")
        },
        {
            path: "/pantry",
            name: "pantry",
            component: () => import("@/pages/PantryPage.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/pages/AboutPage.vue")
        }
    ]
});

export default router;
