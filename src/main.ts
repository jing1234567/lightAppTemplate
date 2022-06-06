import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import router from "./router"
import store from './store'
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from "vant/es/locale/lang/zh-CN";
import zhTW from "vant/es/locale/lang/zh-TW";
import localeResource from './language/index';
import {
  Tab,
  Tabs,
  Field,
  Button,
  CellGroup,
  List,
  Divider,
  Locale
} from "vant";
const app = createApp(App)
const languageMapping = {
  en_US: "en-US",
  zh_CN: "zh-CN",
  zh_TW: "zh-TW",
  l1: "en-US",
  l2: "zh-CN",
  l3: "zh-TW"
};
const resourceMapping = {
  en_US: enUS,
  zh_CN: zhCN,
  zh_TW: zhTW,
  l1: enUS,
  l2: zhCN,
  l3: zhTW
};
Locale.use(
  languageMapping["zh_CN"],
  resourceMapping["zh_CN"]
);
const localeEasContext = {
  Locale: 'L2'
}
const easContext = (window as any).easContext || localeEasContext
app.provide("localeResource",localeResource.zh_ch)
app.provide("easContext",easContext)

app.use(router).use(store);
app.use(Tab)
  .use(Tabs)
  .use(Field)
  .use(Button)
  .use(CellGroup)
  .use(List)
  .use(Divider)
app.mount('#app');

