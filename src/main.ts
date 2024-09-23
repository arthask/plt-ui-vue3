import { createApp } from 'vue';

import Cookies from 'js-cookie';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import en from 'element-plus/dist/locale/en.mjs';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import 'element-plus/dist/index.css';

import '@/assets/styles/index.scss'; // global css
// // element css
// import 'element-plus/es/components/message/style/css';
// import 'element-plus/es/components/message-box/style/css';
// import 'element-plus/es/components/notification/style/css';
// import 'element-plus/es/components/loading/style/css';

// tailwindcss
import './index.css';

import App from './App.vue';
import store from './store';
import router from './router';
import directive from './directive'; // directive

// 注册指令
import plugins from './plugins'; // plugins
import { download } from '@/utils/request';

// svg图标
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon/index.vue';
import elementIcons from '@/components/SvgIcon/svgicon';

import './permission'; // permission control

import { useDict } from '@/utils/dict';
import { parseTime, addDateRange, handleTree } from '@/utils/tools';

// 分页组件
import Pagination from '@/components/Pagination/index.vue';
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar/index.vue';
// 富文本组件
import Editor from '@/components/Editor/index.vue';
// 自定义树选择组件
import TreeSelect from '@/components/TreeSelect/index.vue';
// 字典标签组件
import DictTag from '@/components/DictTag/index.vue';
// 弹窗
import MyDialog from '@/components/Dialog/index.vue';
import { Size } from './typings/store';
import {VueCropper} from 'vue-cropper';
import 'vue-cropper/dist/index.css';

const app = createApp(App);

// 全局方法挂载
app.config.globalProperties.useDict = useDict;
app.config.globalProperties.download = download;
app.config.globalProperties.parseTime = parseTime;
app.config.globalProperties.handleTree = handleTree;
app.config.globalProperties.addDateRange = addDateRange;

// 全局组件挂载
app.component('DictTag', DictTag);
app.component('Pagination', Pagination);
app.component('TreeSelect', TreeSelect);
app.component('RightToolbar', RightToolbar);
app.component('Editor', Editor);
app.component('SvgIcon', SvgIcon);
app.component('MyDialog', MyDialog);

app.use(router);
app.use(store);
app.use(plugins);
app.use(elementIcons);
app.use(VueCropper);

directive(app);

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: zhCn,
    // 支持 large、default、small
    size: (Cookies.get('size') as Size) || 'default',
});

app.mount('#app');
