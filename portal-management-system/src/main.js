import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.less";

let instance;

function render() {
  instance = createApp(App);
  instance.use(router).mount("#app");
}

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    render();
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
} else {
  render();
}
