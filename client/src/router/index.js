import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreatePostView from "@/views/CreatePostView.vue";
import UpdatePostView from "@/views/UpdatePostView.vue";
import ReadPostView from "@/views/ReadPostView.vue";
import JoinView from "../views/JoinView.vue";
import LoginView from "../views/LoginView.vue";
import CategoryCut from "@/views/CategoryCut.vue";

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
    {
        path: "/update/:no",
        name: "UpdatePost",
        component: () => import("../views/UpdatePostView.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("../views/JoinView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
    },
    {
        path: "/admin",
        name: "CategoryCut",
        component: () => import("../views/CategoryCut.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
