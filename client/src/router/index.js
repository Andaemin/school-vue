import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreatePostView from "@/views/CreatePostView.vue";
import UpdatePostView from "@/views/UpdatePostView.vue";
import ReadPostView from "@/views/ReadPostView.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/createpost",
        name: "createpost",
        component: () => import("../views/CreatePostView.vue"),
    },
    {
        path: "/updatepost",
        name: "UpdatePost",
        component: () => import("../views/UpdatePostView.vue"),
    },
    {
        path: "/readBoard/:no",
        name: "Readboard",
        component: () => import("../views/ReadPostView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
