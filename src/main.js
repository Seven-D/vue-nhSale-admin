import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import '@/mock/index' // mock 方式，正式发布时，注释掉该处即可



Vue.prototype.$http = axios;  //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中

Vue.use(ElementUI, {locale});
Vue.use(VueAxios, axios);  //记得注册

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
