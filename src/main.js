import Vue from 'vue';
import qs from 'qs';
import axios from 'axios';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';

// 引入vux

import { AlertPlugin, ToastPlugin, ConfirmPlugin, Flexbox, FlexboxItem, Grid, GridItem } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.component('grid', Grid)
Vue.component('gridItem', GridItem)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem) 

// 写入原型，方便引用
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;

import { library } from '@fortawesome/fontawesome-svg-core'
 
import {
  faHome, faClipboardList, faCartPlus, faUser,faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faClipboardList, faCartPlus, faUser, faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

// Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
