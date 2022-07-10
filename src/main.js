import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import router from "./router/index";
import { registerGlobalComponents } from "./utils/import";

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount("#app");
