import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/base.css";

library.add(faMoon, faSearch, faArrowLeft);

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("FontAwesomeIcon", FontAwesomeIcon);
