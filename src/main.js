import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

const hamburger = document.querySelector(".hamburger");
const burgermenu = document.querySelector(".burgermenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  burgermenu.classList.toggle("active");
});
burgermenu.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  burgermenu.classList.toggle("active");
});
