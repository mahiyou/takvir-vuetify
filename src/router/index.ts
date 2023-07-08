import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeView from "@/views/Home.vue";
import ApiView from "@/views/Api.vue";
import ContactusView from "@/views/Contact.vue";
import SurahView from "@/views/Surah.vue";
import PageView from "@/views/Page.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: HomeView,
            },
            {
                path: "contact-us",
                name: "contact-us",
                component: ContactusView,
            },
            {
                path: "api",
                name: "api",
                component: ApiView,
            },
        ],
    },
    {
        path: "/surah/:surah",
        name: "surah",
        component: SurahView,
        props: true
    },
    {
        path: "/page/:page",
        name: "page",
        component: PageView,
        props: true
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
