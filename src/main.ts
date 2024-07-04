import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引用element-plu
import ElementPlus from 'element-plus'
import zh from 'element-plus/dist/locale/zh-cn.mjs' // 中文语言
// 引入样式
import 'element-plus/dist/index.css'
import '@/styles/index.scss' // global css
import 'amfe-flexible' // 适配
// 引入 router
import router from './router/index.ts'
// import { download } from '@/utils/request'

// svg图标
import 'virtual:svg-icons-register'

//import './permission'

import * as echarts from 'echarts'
import vue3SeamlessScroll from 'vue3-seamless-scroll'
import AnimatedNumber from 'animated-number-vue3'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.$echarts = echarts

// 全局组件挂载

app.use(vue3SeamlessScroll, { name: '' })
app.use(AnimatedNumber)

app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: zh,
  // 支持 large、default、small
  size: 'default'
})

app.mount('#app')
