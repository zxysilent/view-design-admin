import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ViewUI from "view-design";

import store from "./store";
import "view-design/dist/styles/iview.css";
import "./assets/styles/layout/layout.less"; // 引入布局样式
import "./assets/styles/cover/cover.less"; // 覆盖样式
import "./assets/styles/base/base.less";

Vue.use(ViewUI, { transfer: true });
Vue.config.productionTip = false;
var winWidth = document.documentElement.clientWidth;
if (winWidth <= 600) {
    store.commit("CLOSE_SLIDEBAR");
} else {
    store.commit("OPEN_SLIDEBAR");
}
window.onresize = function() {
    winWidth = document.documentElement.clientWidth;
    if (winWidth <= 600) {
        store.commit("CLOSE_SLIDEBAR");
    } else {
        store.commit("OPEN_SLIDEBAR");
    }
};
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
