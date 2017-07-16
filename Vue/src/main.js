// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts/highstock';
import VueSocketIO from 'vue-socket.io';

Vue.use(VueSocketIO, 'localhost:3000');

Vue.use(VueHighcharts, { Highcharts });
Vue.use(VueFire);

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});
