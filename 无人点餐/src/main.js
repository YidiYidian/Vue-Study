// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'

// import Router11 from "./components/Router11.vue";
// import Router22 from "./components/Router22.vue";

Vue.config.productionTip = false
Vue.use(VueResource);
// Vue.use(VueRouter);

// const routes = [
//   {path:'/router11',component:Router11},
//   {path:'/router22',component:Router22}
// ]


// const router = new VueRouter({
//   routes
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
