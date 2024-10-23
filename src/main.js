import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createStore } from "./store";
import router from "./router";
import axios from "axios";

const store = createStore();

const app = createApp(App);

/* sets the base url for server API communication with axios */
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

app.use(store);
app.use(router);
app.mount("#app");
