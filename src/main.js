import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import Vue2OrgTree from 'vue2-org-tree'
import './style/style.css';
import 'vue2-org-tree/dist/style.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vue2OrgTree);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
