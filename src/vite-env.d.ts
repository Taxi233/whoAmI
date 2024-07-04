/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// env.d.ts中

// TODO: TS 无法主动发现模块，如果找不到模块，则需要在此使用 declare module 进行配置
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'
declare module 'element-plus'
declare module 'moment'
declare module 'echarts-gl'
declare module 'vue-cropper'
