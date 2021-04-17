import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _axios from "./common/api.service";
import VueAxios from "vue-axios";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueAxios, _axios)
  .mount("#app");

// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login") {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });
