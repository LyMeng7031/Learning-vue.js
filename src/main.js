import { createApp } from "vue";
import { createPinia } from "pinia"; // Must import Pinia
import App from "./App.vue";
import router from "./router"; // Check if your folder is 'router' or 'route'

// 1. Initialize the app
const app = createApp(App);

// 2. Create Pinia instance
const pinia = createPinia();

// 3. Tell Vue to use the plugins (ORDER MATTERS)
app.use(pinia); // Plugin 1
app.use(router); // Plugin 2

// 4. Finally, mount to the HTML
app.mount("#app");
