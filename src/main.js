import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import router from "./router/index";
import { registerGlobalComponents } from "./utils/import";
import { projectAuth } from "@/configs/firebase";
import "@vuepic/vue-datepicker/dist/main.css";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
