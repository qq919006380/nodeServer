import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { apiPlus } from "./api";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./css/tailwindcss.css";


import "babel-polyfill";

const app = createApp(App);
app.use(router);
app.use(apiPlus);
app.use(ElementPlus);

app.mount("#app");
