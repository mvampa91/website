import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMq from "vue3-mq";
import "./assets/global.css";

const app = createApp(App)

app.use(router)

app.use(VueMq, {
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  })

app.mount("#app");
