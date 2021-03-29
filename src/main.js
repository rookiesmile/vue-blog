import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'
// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// font-awesome字体图标
import 'font-awesome/css/font-awesome.min.css'

// 编写markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// 展示markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

VueMarkdownEditor.use(vuepressTheme);
VMdPreview.use(vuepressTheme);

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).use(VueMarkdownEditor).use(VMdPreview);
app.mount('#app')
