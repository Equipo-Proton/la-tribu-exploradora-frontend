import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/bootstrap.min.css";
import "./assets/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

/* axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`; */

app.mount("#app");
