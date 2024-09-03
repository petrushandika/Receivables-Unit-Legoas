import { createApp } from "vue";
import "./style.css";
import router from "./routes";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
