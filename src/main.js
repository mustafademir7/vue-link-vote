import Vue from 'vue';
import App from './App.vue';
//Router
import router from './router/index';
//Vee-Validate
import VeeValidate, { Validator } from 'vee-validate';
import tr from 'vee-validate/dist/locale/tr';
Validator.localize('tr', tr);
const config = {
    events: 'input',
    delay: 2,
    inject: true,
    fieldsBagName: 'veeFields'
};
Vue.use(VeeValidate, config);
//Vue Moment
Vue.use(require('vue-moment'));
//Vue Toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted);
//Storage 
import { Storage } from '@/Models/Storage';
Vue.prototype.$storage = new Storage();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
