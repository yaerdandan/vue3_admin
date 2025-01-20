import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { zhCn } from "element-plus/es/locales.mjs";
import App from "@/App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(ElementPlus, {
  locale: zhCn,
});
//@ts-ignore
import "virtual:svg-icons-register";

app.mount("#app");
