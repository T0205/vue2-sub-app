
// 导入文件
import './public-path';
import VueRouter from 'vue-router';

import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'


Vue.config.productionTip = false

// 原理: 重写一个 render 函数 以及 整个路由 router, 
//       通过环境判断当前是否处于qiankun环境, 从而判断去执行哪一个 render 函数.

let router = null
let vueInstance = null
function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2-app/' : '/', // qiankun环境根路由地址为 /vue2-app/
    mode: 'history',
    router: routes    // VueRouter 的其中一个属性是 router, qiankun官方文档好像有错误
  })

  vueInstance = new Vue({
    router: routes,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')   // render函数接收一个参数h，它是createElement函数的别名。这个render函数的作用是返回一个由App组件构成的虚拟DOM树。
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 当运行在 qiankun 环境的时候
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  vueInstance.$destroy();
  vueInstance.$el.innerHTML = '';
  vueInstance = null;
  router = null;
}
