import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";
import "./assets/base.css";

loadFonts();

const app = createApp(App).use(router).use(store).use(vuetify);

app.config.globalProperties.$axios = axios;
app.mount("#app");
