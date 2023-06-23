// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/Home.vue"),
        children: [
            {
                path: "",
                name: "Home",
                component: () =>
                    import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            },
        ],
    },

    {
        path: "/surah/:surahNum",
        name: "surah",
        component: () => import("@/views/Surah.vue"),
    },
    {
        path: "/contact-us",
        name: "contact-us",
        component: () => import ("@/views/Contact.vue")
    },
    {
        path: "/api",
        name: "api",
        component: () => import ("@/views/Api.vue")
    },
    {
        path: "/page/:pageNum",
        name: "page",
        component: () => import ("@/views/Page.vue")
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
