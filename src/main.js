import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import Vue2OrgTree from 'vue2-org-tree'
import './style/style.css';
import 'vue2-org-tree/dist/style.css';
// import {RichTextEditorPlugin} from '@syncfusion/ej2-vue-richtexteditor';
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vue2OrgTree);
// Vue.use(RichTextEditorPlugin);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
