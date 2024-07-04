import modal from '@/plugins/modal.ts'
import download from '@/plugins/download.ts'
import printTool from '@/plugins/printTool.ts'
// import { socket } from '@/plugins/socket.ts'

export default function installPlugins(app: any) {
  // 模态框对象
  app.config.globalProperties.$modal = modal
  // 下载文件
  app.config.globalProperties.$download = download
  // websocket
  // app.config.globalProperties.$socket = socket
  // 打印页面
  app.config.globalProperties.$printTool = printTool

}
