import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css/animate.min.css";
// element
import ElementPlus from "element-plus";
// vform3
import VForm3 from "vform3-builds";
import "vform3-builds/dist/designer.style.css"; //引入VForm3样式
// 参照官方文档
import "element-plus/theme-chalk/src/index.scss";
import axios from "axios";
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */
window.axios = axios;

// 引入公共样式
import "../src/styles/global.scss";
import "../src/styles/common.scss";
import "../src/styles/themeColor.scss";
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(VForm3)
  .mount("#app");
