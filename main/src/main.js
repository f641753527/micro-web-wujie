import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { apps } from "./apps";

import "./styles/index.less";

import { setupApp, startApp } from "wujie";

apps.forEach((app) => setupApp(app));

createApp(App).use(router).mount("#app");

router.beforeEach((to) => {
  const app = apps.find((app) => app.path === to.path);
  app && startApp(app);
});
