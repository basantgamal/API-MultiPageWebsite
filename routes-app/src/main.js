import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';
import App from './App.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;


const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
