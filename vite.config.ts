import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import { createHtmlPlugin } from 'vite-plugin-html'
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [
      vue(),
      // viteCommonjs(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        symbolId: 'icon-[name]'
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'types/auto-imports.d.ts'
      }),
      createHtmlPlugin({
        inject: {
          data: {
            ...env
          }
        }
      })
    ],
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 192, // 192表示设计稿是1920设计稿
            propList: ['*'], // 需要转换的属性，*是全部进行转换
            selectorBlackList: ['norem-'], // 过滤掉norem-开头的class，不进行rem转换
            // // 排除 node_modules 文件(node_modules 内文件禁止转换)
            // exclude:
            //   /src(\\|\/)view(\\|\/)threesafety(\\|\/)companyenterprise(\\|\/)inspectionRecords(\\|\/)dio.vue/
          })
        ]
      }
    },
    resolve: {
      // Vite路径别名配置
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 9000, // 端口号
      open: false, // 是否自动打开浏览器
      //proxy: {
      //  // 选项写法
      //  '/api': {
      //    // target: 'https://zc.cqdflc.com:8081',
      //    target: 'http://192.168.39.119:8144',
      //    // target: 'http://192.168.39.50:8080',
      //    changeOrigin: true
      //    // rewrite: (path) => path.replace(/^\/api/, '')
      //  },
      //  '/fwApi': {
      //    target: 'https://fw.cqzhitian.cn',
      //    ws: false,
      //    changeOrigin: true,
      //    rewrite: (path) => path.replace(/^\/fwApi/, '')
      //  },
      //  '/uploadfile': {
      //    // target: 'https://zc.cqdflc.com:8081',
      //    target: 'http://192.168.39.119:8145',
      //    changeOrigin: true,
      //    rewrite: (path) => path.replace(/^\/uploadfile/, '/api/uploadfile/')
      //  }
      //},
      hmr: {
        overlay: true
      }
    },
    // css: {
    //   postcss: {
    //     plugins: [postcss],
    //   },
    // },
    base: './',
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})
