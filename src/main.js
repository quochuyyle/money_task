import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import router from "./router/index";
import { registerGlobalComponents } from "./utils/import";
import { projectAuth } from "@/configs/firebase";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue-select/dist/vue-select.css";
import axios from "axios";
import VueAxios from "vue-axios";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(VueAxios, axios);
    app.provide("axios", app.config.globalProperties.axios);
    app.use(router);
    app.mount("#app");
  }
});
